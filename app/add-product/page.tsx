"use client";
// react
import { useEffect, useState } from "react";
// axios
import axios from "axios";
// schema validation
import { addProductSchema } from "@/lib/yupValidationSchema";
// react hoock form
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {  MenuItem } from "@mui/material";
// components
import CustomContainer from "../components/layout/CustomContainer";
import MuiRtlWrapper from "@/app/components/reusableComponents/MuiRtlWrapper";
// next
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
// files
import Logo from "@/public/images/logo.png";
// Components
import ShowMessage from "../components/reusableComponents/ShowMessage";
import { returnPersianMessage } from "@/lib/helpers";
// interface
import { AddProductInputs } from "@/types/props.module";

const schema = addProductSchema;

function AddProduct() {
  const [message, setMessage] = useState({ status: false, text: "", type: "" });
  const [disableButton, setDisableButton] = useState(false);

  const { data: session, status } = useSession();

  // get current users username
  const username = session?.user?.name;
  // redirect if user not athenticated
  useEffect(() => {
    //  if user is not login redirect to home page
    if (status !== "loading" && status !== "authenticated") {
      redirect("/");
    } else if (status !== "loading" && status === "authenticated") {
    }
  }, [status]);
  // set defaultvalue for site section
  useEffect(() => {
    //  if user is not login redirect to home page
    if (status !== "loading" && status !== "authenticated") {
      redirect("/");
    } else if (status !== "loading" && status === "authenticated") {
    }
  }, [status]);
  // setting form input initial values
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      model: "",
      description: "",
      image: "",
      section: "عمومی",
      discount: 0,
    },
    resolver: yupResolver(schema),
  });
  // form submition
  const onSubmit: SubmitHandler<AddProductInputs> = ({
    name,
    model,
    description,
    image,
    section,
    discount,
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
        "/api/product/add-product",
        {
          username: username,
          name: name,
          model: model,
          description: description,
          image: image,
          discount: discount,
          section: section,
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
            text: "ثبت کالا با موفقیت انجام شد.",
            type: "success",
          });
        }
      })
      .catch(function (error) {
        const hasError = error?.response?.data;
        if (hasError) {
          const errorText = returnPersianMessage(hasError);
          setMessage({
            status: true,
            text: errorText,
            type: "error",
          });
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
// list for site section
  const listItems = ["عمومی","کالای دیجیتال", "پوشاک", "لوازم منزل", "کیف", "کفش"];
  if (status === "loading") {
    return;
  }
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
              فرم ثبت کالای جدید
            </h2>
            {/* name */}
            <div>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="w-full"
                    InputProps={{
                      sx: { borderRadius: 1, height: 40 },
                    }}
                    label="نام کالا"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
              <p className={errorTagClasses}>{errors.name?.message}</p>
            </div>
            {/* model */}
            <div>
              <Controller
                name="model"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="w-full"
                    InputProps={{
                      sx: { borderRadius: 1, height: 40 },
                    }}
                    label="مدل(اختیاری)"
                    variant="outlined"
                    type="text"
                    size="small"
                  />
                )}
              />
              <p className={errorTagClasses}>{errors.model?.message}</p>
            </div>
            {/* image */}
            <div>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="w-full"
                    InputProps={{
                      sx: { borderRadius: 1, height: 40 },
                    }}
                    label="لینک فایل"
                    variant="outlined"
                    type="text"
                    size="small"
                  />
                )}
              />
              <p className={errorTagClasses}>{errors.image?.message}</p>
            </div>
            {/* section */}
            <p className="m-0 relative top-3 text-sm text-custom-textSecondary">
                    <label>بخش نمایش</label>
            </p>
            <div>
              <Controller
                render={({ field }) => (
                  <Select
                    {...field}   
                    size="small"
                    className="w-full"
                    defaultValue='عمومی'
                  >
                    {listItems&&listItems.map(item=><MenuItem value={item}>{item}</MenuItem>)}
                  </Select>
                )}
                control={control}
                name="section"
              />
              <p className={errorTagClasses}>{errors.section?.message}</p>
            </div>
            {/* "discount" */}
            <div>
              <Controller
                name="discount"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="w-full"
                    InputProps={{
                      sx: { borderRadius: 1, height: 40 },
                    }}
                    label="تخفیف(اختیاری)"
                    variant="outlined"
                    type="number"
                    size="small"
                  />
                )}
              />
              <p className={errorTagClasses}>{errors.discount?.message}</p>
            </div>
            {/* {"description"} */}
            <div>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextareaAutosize
                    {...field}
                    aria-label="minimum height"
                    minRows={6}
                    placeholder="توضیحات"
                    className="w-full border border-[#c4c4c4] p-2"
                  />
                )}
              />
              <p className={errorTagClasses}>{errors.description?.message}</p>
            </div>
            <Button
              sx={{ marginTop: 3 }}
              type="submit"
              variant="contained"
              disabled={disableButton ? true : false}
            >
              ثبت کالا
            </Button>
          </div>
        </CustomContainer>
      </MuiRtlWrapper>
    </form>
  );
}

export default AddProduct;
