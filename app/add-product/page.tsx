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
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
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

interface IFormInput {
  name: string;
  model: string;
  description: string;
  image: string;
  discount: number;
}
const schema = addProductSchema;

// type FormData = yup.InferType<typeof schema>;

function AddProduct() {
  const [message, setMessage] = useState({ status: false, text: "", type: "" });
  const [disableButton, setDisableButton] = useState(false);

  const { data: session, status } = useSession();
  const username=session?.user?.name
  useEffect(() => {
    //  if user is not login redirect to home page
    if (status !== "loading" && status !== "authenticated") {
      redirect("/");
    }else if(status !== "loading"&&status === "authenticated"){
        
    }
  }, [status]);

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
      discount: 0,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = ({
    name,
    model,
    description,
    image,
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
      }).finally(()=>setDisableButton(false))
  };

  const errorTagClasses = "mt-2 text-sm text-custom-main";
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
                    label="مدل"
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
            {"discount"}
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
