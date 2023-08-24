"use client";
import { Props } from "@/app/types/props.module";

function CustomContainer({ children, hasBorder }: Props) {
  const parentDivClasses: string = hasBorder
    ? "border-b-custom-border border-b "
    : "";
  return (
    <div className={parentDivClasses}>
      <div className="container mx-auto max-w-7xl py-3  ">{children}</div>
    </div>
  );
}

export default CustomContainer;
