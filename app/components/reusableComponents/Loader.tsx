"use client";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
  return <CircularProgress color="inherit" size="1rem" className="mx-3" />;
}
