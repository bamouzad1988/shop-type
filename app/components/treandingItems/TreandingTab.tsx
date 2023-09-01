"use client";
import React, { MouseEvent } from "react";
import { TreandingTabProps } from "@/app/types/props.module";

function TreandingTab({ title, isActive, onClick }: TreandingTabProps) {
  const ActiveClass = isActive && "bg-custom-main text-custom-white";

  return (
    <p
      className={`px-2 py-1 mx-1 rounded-sm text-sm cursor-pointer transition-colors duration-300 hover:bg-custom-main hover:text-custom-white ${ActiveClass}`}
      onClick={onClick}
    >
      {title}
    </p>
  );
}

export default TreandingTab;
