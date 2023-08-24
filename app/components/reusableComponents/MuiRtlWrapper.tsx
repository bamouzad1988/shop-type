"use client";
// mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
// mui type for colors
declare module "@mui/material/styles" {
  interface PaletteColor {
    [prop: string]: string;
  }

  interface SimplePaletteColorOptions {
    [prop: string]: string;
  }
}
// types
import { Props } from "@/app/types/props.module";

const theme = createTheme({
  direction: "rtl",
  typography: {
    allVariants: {
      fontFamily: "iransansx-num-regular",
      textTransform: "none",
      fontSize: 14,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#f7941d",
      secondary: "#333",
      text: "#333",
      contrastText: "#fff",
      border: "#f0f0f0",
      sectionTitle: "#2c2d3f",
      productText: "#424646",
      pageBack: "#f6f7fb",
    },
  },
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function MuiRtlWrapper({ children }: Props) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}

export default MuiRtlWrapper;
