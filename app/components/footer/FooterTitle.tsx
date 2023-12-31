'use client'
import { FooterTitleProps } from "@/types/props.module";

function FooterTitle(props: FooterTitleProps) {
  const { title } = props;
  return (
    <h4 className="text-custom-white font-iransans-demibold mb-6"> {title}</h4>
  );
}

export default FooterTitle;
