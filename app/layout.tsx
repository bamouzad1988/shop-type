// css
import "./styles/main.scss";
import "@/public/fonts/themify-icons/themify-icons.css";

import type { Metadata } from "next";
import MyHeader from "./components/layout/header/MyHeader";
export const metadata: Metadata = {
  title: "Nice Shop",
  description: "Created By Nice Shop Team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <MyHeader />

        {children}
      </body>
    </html>
  );
}
