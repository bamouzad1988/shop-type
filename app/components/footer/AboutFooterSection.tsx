"use client";
import FooterSectionWrapper from "../reusableComponents/FooterSectionWrapper";
import Link from "next/link";
import logoImage from "@/public/images/logo2.png";
import Image from "next/image";

async function AboutFooterSection() {
  // changePassword
  // async function changePassword(
  //   email: string = "bijan@123",
  //   oldPassword: string = "sdsdsdsdfsdf",
  //   password: string = "sdsdsdsdfsdf"
  // ) {
  //   try {
  //     const response = await fetch("/api/user/changePassword", {
  //       method: "PATCH",
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //         oldPassword: oldPassword,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     });
  //     return await response.text();
  //   } catch (error) {
  //     console.log("component error");
  //   }
  // }
  // const ss = await changePassword(
  //   "bijan@123.",
  //   "sdfsdfsdfsdf",
  //   "sdfsdfsdfsdf11111"
  // );
  // console.log(ss);

  return (
    <FooterSectionWrapper>
      <Link href="/" className="block mb-6">
        <Image src={logoImage} alt="Nice Shop" className="w-auto h-[30px]" />
      </Link>
      <p className="text-justify leading-6 text-sm">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
      </p>
      <div className="mt-4">
        <h6 className="m-0">پشتیبانی فروش 24 ساعته</h6>
        <a
          href="tel:1234567890"
          className="text-custom-main text-xl font-iransans-demibold block"
        >
          021-000000000
        </a>
      </div>
    </FooterSectionWrapper>
  );
}

export default AboutFooterSection;
