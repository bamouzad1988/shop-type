"use client";
// axios
import axios from "axios";
// schema validation
import { registerValidationSchema } from "@/lib/yupValidationSchema";
// react hoock form
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// components
import MuiRtlWrapper from "@/app/components/reusableComponents/MuiRtlWrapper";
import CustomContainer from "../layout/CustomContainer";
import ShowMessage from "../reusableComponents/ShowMessage";
// next
import { redirect } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";
// files
import Logo from "@/public/images/logo.png";
// react
import { useEffect, useState } from "react";

interface IFormInput {
  username: string;
  password: string;
}
const schema = registerValidationSchema;

// type FormData = yup.InferType<typeof schema>;

function AuthForm() {
  const [message, setMessage] = useState({ status: false, text: "", type: "" });
  const [disableButton, setDisableButton] = useState(false);
  const [redirectPage, setRedirectPage] = useState(false);

  useEffect(() => {
    if (redirectPage) {
      redirect("/");
    }
  }, [redirectPage]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = ({ username, password }) => {
    // setDisableButton(true);
    setMessage({
      status: false,
      text: "",
      type: "",
    });
    //register or login
    signIn("credentials", {
      redirect: false,
      username: username,
      password: password,
    })
      .then((response) => {
        alert("then");
        if (!response.error) {
          setMessage({
            status: true,
            text: "ثبت نام با موفقیت انجام شد.",
            type: "success",
          });
        }
      })
      .catch(function (error) {
        alert("catch");
        const hasError = error?.response?.data;
        if (hasError) {
          switch (hasError) {
            case "you signed before":
              setMessage({
                status: true,
                text: " این نام کاربری قبلا استفاده شده است.",
                type: "error",
              });
              break;

            default:
              setMessage({
                status: true,
                text: "مشکلی پیش آمده لطفا مجددا تلاش کنید.",
                type: "error",
              });

              break;
          }
        } else {
          setMessage({
            status: true,
            text: "مشکلی پیش آمده لطفا مجددا تلاش کنید.",
            type: "error",
          });
        }
      })
      .finally(() => setDisableButton(false));
  };

  const errorTagClasses = "mt-2 text-sm text-custom-main";
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-10">
      {message.status && (
        <ShowMessage text={message.text} type={message.type} />
      )}
      <MuiRtlWrapper>
        <CustomContainer>
          <div className="max-w-[400px] px-5 flex flex-col m-auto gap-4 py-5 rounded-sm border border-custom-border">
            <div className="mx-auto mt-4">
              <Image src={Logo} alt="Nice Shop" />
            </div>
            <h2 className="text-right font-iransans-demibold mb-3">
              فرم ثبت نام
            </h2>
            <div>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="w-full"
                    InputProps={{
                      sx: { borderRadius: 1, height: 40 },
                    }}
                    label="نام کاربری"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <p className={errorTagClasses}>{errors.username?.message}</p>
            </div>
            <div>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="w-full"
                    InputProps={{
                      sx: { borderRadius: 1, height: 40 },
                    }}
                    label="کلمه عبور"
                    variant="outlined"
                    type="password"
                    size="small"
                  />
                )}
              />
              <p className={errorTagClasses}>{errors.password?.message}</p>
            </div>
            <Button
              sx={{ marginTop: 3 }}
              type="submit"
              variant="contained"
              disabled={disableButton ? true : false}
            >
              ثبت نام
            </Button>
          </div>
        </CustomContainer>
      </MuiRtlWrapper>
    </form>
  );
}
export default AuthForm;
