"use client";
// yup
import * as yup from "yup";
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

interface IFormInput {
  username: string;
  password: string;
}
const characterRgx = /^[A-Za-z]+$/;
const schema = yup.object({
  username: yup
    .string()
    .required("لطفا نام کاربری را وارد کنید")
    .min(7, "حداقل 7 کاراکتر")
    .matches(characterRgx, "فقط حروف و اعداد انگلیسی"),
  password: yup
    .string()
    .required("لطفا کلمه ی عبور را وارد کنید")
    .min(7, "حداقل 7 کاراکتر")
    .matches(characterRgx, "فقط حروف و اعداد انگلیسی"),
});

type FormData = yup.InferType<typeof schema>;

export default function Register() {
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

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const errorTagClasses = "mt-2 text-xs text-custom-main";
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-10">
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
                    size="small"
                  />
                )}
              />
              <p className={errorTagClasses}>{errors.password?.message}</p>
            </div>
            {true && (
              <p className="mt-2 text-base text-custom-main m-0">
                قبلا این نام کاربری توسط شخص دیگری استفاده شده است
              </p>
            )}
            <Button sx={{ marginTop: 5 }} type="submit" variant="contained">
              ثبت نام
            </Button>
          </div>
        </CustomContainer>
      </MuiRtlWrapper>
    </form>
  );
}
