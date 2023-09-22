// axios
import axios, { AxiosResponse } from "axios";
// types
import {  FetchResult, RegisterValidation } from "@/types/props.module";
// check validation by type and min lenght
export const validation = (params: RegisterValidation) => {
  const characterRgx = /^[A-Za-z][A-Za-z0-9]*$/;
  const { data, minLength, type } = params;
  const trimedData = data.trim();
  if (!trimedData || trimedData.length < minLength) {
    return false;
  }
  if ((type === "username"||type === "password") && !data.match(characterRgx)) {
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
// return persian message
export const returnPersianMessage = (text: string) => {
  switch (text) {
    case "not athenticated":
      return "برای استفاده از این بخش باید وارد شوید.";
    case "not match passwords":
      return "کلمه ی عبور جدید و تکرارش با هم برابر نیستند.";
    case "passwords are equal":
      return "کلمه ی عبور جدید و قبلی  با هم برابر هستند.";
    case "user not found":
      return "کاربر مورد نظز یافت نشد.";
    case "old password is inccorect":
      return "کلمه عبور قبلی مطابقت ندارد.";
    case "invalid data!!":
      return "اطلاعات وارد شده صحیح نمی باشد.";
    case "you signed before":
      return "این نام کاربری قبلا توسط کاربر دیگری استفاده شده است.";

    default:
      return "مشکلی پیش آمده لطفا مجددا تلاش کنید.";
  }
};
// axios request handler
export async function postAxios<T>(
  url: string,
  method: string,
  payload: Record<string | number, any> = {}
): Promise<FetchResult<T>> {
  const controller = new AbortController();
  try {
 
    console.log(method);
    const response: AxiosResponse<T> = await axios.request({
      data: payload,
      signal: controller.signal,
      method,
      url,
    });
 //TODO
//  check for canceling requesst
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error:error?.response?.data };
  } finally {
    controller.abort();
  }
}
export async function getAxios<T>(
  url: string,
  method: string,
  payload: Record<string | number, any> = {}
): Promise<FetchResult<T>> {
  const controller = new AbortController();
  try {
 
    const response: AxiosResponse<T> = await axios.request({
      data: payload,
      signal: controller.signal,
      method,
      url,
    });
//  check for canceling requesst
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error:error?.response?.data };
  } finally {
    controller.abort();
  }
}
