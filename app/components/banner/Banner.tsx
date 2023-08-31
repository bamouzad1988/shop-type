import Image from "next/image";
import "./banner.scss";
import Link from "next/link";

import { BannerProps } from "@/app/types/props.module";
function Banner(props: BannerProps) {
  return (
    <div className="main bg-custom-main w-full h-auto aspect-video">
      <Image
        src={props.image}
        alt="user profile picture"
        className="w-full h-full "
      />
      <div className="absolute top-1/2 pr-10 max-w-[50%]">
        <h6 className="text-custom-main text-sm">{props.overTitle}</h6>
        <h4 className="text-2xl mt-2 leading-7 text-custom-text">
          {props.title}
        </h4>
        <Link
          className="mt-6 inline-block border-b hover:text-custom-main duration-300 transition-all text-custom-textSecondary"
          href={props.link}
        >
          {props.linkText}
        </Link>
      </div>
    </div>
  );
}

export default Banner;
