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
    newPasswordRepeat: yup
    .string()
    .required("لطفا کلمه ی عبور قبلی را وارد کنید")
    .min(7, "حداقل 7 کاراکتر")
    .matches(characterRgx, "فقط حروف و اعداد انگلیسی"),
});
export const addProductSchema = yup.object({
  name: yup
    .string()
    .required("لطفا نام کالا را وارد کنید")
    .min(3, "حداقل 3 کاراکتر"),
  model: yup
    .string(),
  description: yup
    .string()
    .required("لطفا توضیحات را وارد کنید")
    .min(10, "حداقل 10 کاراکتر"),
  image: yup
    .string()
    .required("لطفا لینک تصویر محصول را وارد کنید")
    .min(7, "حداقل 7 کاراکتر"),
  section: yup
    .string()
    .required("لطفا یک بخش را انتخاب کنید")
    .min(1, "حداقل 1 کاراکتر"),
    discount: yup
    .number('فقط عدد وارد کنید')

});
