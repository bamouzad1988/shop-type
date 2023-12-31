"use client";
// hot toast
import toast from 'react-hot-toast';
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
// next
import Image from "next/image";
import { signIn } from "next-auth/react";
// files
import Logo from "@/public/images/logo.png";
// react
import { useState } from "react";
import Link from "next/link";

interface IFormInput {
  username: string;
  password: string;
}
const schema = registerValidationSchema;

// type FormData = yup.InferType<typeof schema>;

function AuthForm() {
  const [disableButton, setDisableButton] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = ({ username, password }) => {
    setDisableButton(true)
    //register or login
    signIn("credentials", {
      redirect: false,
      username: username,
      password: password,
    }).then((response) => {
      const error = response.error;
      if (!error) {
        toast.success('ورود با موفقیت انجام شد');
        setTimeout(() => {
          window.location.href = "/";
        }, 4000);
      } else {
        toast.error('کاربر مورد نظر یافت نشد!')
        setDisableButton(false)
      }
    });
  };

  const errorTagClasses = "mt-2 text-sm text-custom-main";
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-10">
      <MuiRtlWrapper>
        <CustomContainer>
          <div className="max-w-[400px] px-5 flex flex-col m-auto gap-4 py-5 rounded-sm border border-custom-border">
            <div className="mx-auto mt-4">
              <Image src={Logo} alt="Nice Shop" />
            </div>
            <h2 className="text-right font-iransans-demibold mb-3">فرم ورود</h2>
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
              disabled={(disableButton || !isValid)}
            >
              ورود
            </Button>
            <p className="text-center m-0">
              برای{" "}
              <Link className="text-custom-main underline" href="/register">
                ثبت نام
              </Link>{" "}
              کلیک کنید.
            </p>
          </div>
        </CustomContainer>
      </MuiRtlWrapper>
    </form>
  );
}
export default AuthForm;
