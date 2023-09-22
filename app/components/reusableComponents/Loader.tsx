"use client";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader({size}) {
  return (
    <div className="text-center my-10 text-custom-main">

    <CircularProgress color="inherit" size={size} className="mx-3" />;
    </div>
  )
}
