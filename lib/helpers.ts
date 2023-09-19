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
