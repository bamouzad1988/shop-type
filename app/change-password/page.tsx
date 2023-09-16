"use client";
import axios from "axios";
// yup
import { changePasswordValidationSchema } from "./../../lib/yupValidationSchema";
// react hoock form
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// components
import MuiRtlWrapper from "../components/reusableComponents/MuiRtlWrapper";
import CustomContainer from "../components/layout/CustomContainer";
// next
import Image from "next/image";
// files
import Logo from "@/public/images/logo.png";
import ShowMessage from "../components/reusableComponents/ShowMessage";
import { useState } from "react";

interface IFormInput {
  username: string;
  newPassword: string;
  oldPassword: string;
}
const schema = changePasswordValidationSchema;

// type FormData = yup.InferType<typeof schema>;

function ChangePassword() {
  const [message, setMessage] = useState({ status: false, text: "", type: "" });
  const [disableButton, setDisableButton] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newPassword: "",
      oldPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = ({
    newPassword,
    oldPassword,
  }) => {
    setDisableButton(true);
    setMessage({
      status: false,
      text: "",
      type: "",
    });
    //register
    axios
      .post(
        "/api/auth/user/change-password",
        {
            username:"",
            oldPassword: oldPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setMessage({
            status: true,
            text: " تغییر کلمه عبور با موفقیت انجام شد.",
            type: "success",
          });
        }
      })
      .catch(function (error) {
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
              فرم تغییر کلمه عبور
            </h2>
            {/* old password */}
            <div>
              <Controller
                name="oldPassword"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="w-full"
                    InputProps={{
                      sx: { borderRadius: 1, height: 40 },
                    }}
                    label="کلمه عبور قبلی"
                    variant="outlined"
                    type="password"
                    size="small"
                  />
                )}
              />
              <p className={errorTagClasses}>{errors.oldPassword?.message}</p>
            </div>
            {/* new password */}
            <div>
              <Controller
                name="newPassword"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="w-full"
                    InputProps={{
                      sx: { borderRadius: 1, height: 40 },
                    }}
                    label="کلمه عبور جدید"
                    variant="outlined"
                    type="password"
                    size="small"
                  />
                )}
              />
              <p className={errorTagClasses}>{errors.newPassword?.message}</p>
            </div>
            {/* tepeat new password */}
            <div>
              <Controller
                name="newPassword"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="w-full"
                    InputProps={{
                      sx: { borderRadius: 1, height: 40 },
                    }}
                    label="تکرار کلمه عبور جدید"
                    variant="outlined"
                    type="password"
                    size="small"
                  />
                )}
              />
              <p className={errorTagClasses}>{errors.newPassword?.message}</p>
            </div>
            <Button
              sx={{ marginTop: 3 }}
              type="submit"
              variant="contained"
              disabled={disableButton ? true : false}
            >
              تغییر کلمه عبور
            </Button>
          </div>
        </CustomContainer>
      </MuiRtlWrapper>
    </form>
  );
}
export default ChangePassword;
