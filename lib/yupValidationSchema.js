import * as yup from "yup";
const characterRgx = /^[A-Za-z][A-Za-z0-9]*$/;
export const registerValidationSchema = yup.object({
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
export const changePasswordValidationSchema = yup.object({
  newPassword: yup
    .string()
    .required("لطفا کلمه ی عبور جدید را وارد کنید")
    .min(7, "حداقل 7 کاراکتر")
    .matches(characterRgx, "فقط حروف و اعداد انگلیسی"),
  oldPassword: yup
    .string()
    .required("لطفا کلمه ی عبور قبلی را وارد کنید")
    .min(7, "حداقل 7 کاراکتر")
    .matches(characterRgx, "فقط حروف و اعداد انگلیسی"),
});
