import Image from "next/image";
import "./banner.scss";
import Link from "next/link";

import { BannerProps } from "@/types/props.module";
function Banner({ image, overTitle, title, link, linkText, alt }: BannerProps) {
  return (
    <div>
      <div className="main w-full h-auto relative aspect-video ">
        <Image
          src={image}
          alt={alt}
          width={0}
          height={0}
          sizes="100%"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="absolute top-[20px] pr-10 max-w-[60%]">
          <h6 className="text-custom-main text-sm">{overTitle}</h6>
          <h4 className="md:text-base lg:text-xl  text-xl mt-2 leading-5 text-custom-text">
            {title}
          </h4>
          <Link
            className="mt-3 inline-block border-b hover:text-custom-main duration-300 transition-all text-sm text-custom-textSecondary"
            href={link}
            target="_blank"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
