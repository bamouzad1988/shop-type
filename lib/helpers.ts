import { RegisterValidation } from "@/types/props.module";

export const validation = (params: RegisterValidation) => {
  const characterRgx = /^[A-Za-z][A-Za-z0-9]*$/;
  const { data, minLength, type } = params;
  const trimedData = data.trim();
  if (!trimedData || trimedData.length < minLength) {
    return false;
  }
  if (type !== "email" && !data.match(characterRgx)) {
    return false;
  }
  if (
    type === "email" &&
    !trimedData.includes("@") &&
    !trimedData.includes(".")
  ) {
    return false;
  }

  return true;
};
export const returnPersianMessage = (text: string) => {
  switch (text) {
    case "not athenticated":
      return "redirect";
    case "not match passwords":
      return "کلمه ی عبور جدید و تکرارش با هم برابر نیستند.";
    case "passwords are equal":
      return "کلمه ی عبور جدید و قبلی  با هم برابر هستند.";
    case "user not found":
      return "کاربر مورد نظز یافت نشد.";

    case "old password is inccorect":
      return "کلمه عبور قبلی مطابقت ندارد.";
    case "you signed before":
      return "این نام کاربری قبلا توسط کاربر دیگری استفاده شده است.";

    default:
      return "مشکلی پیش آمده لطفا مجددا تلاش کنید.";
  }
};
