// css
import "./styles/main.scss";
import "@/public/fonts/themify-icons/themify-icons.css";

import type { Metadata } from "next";
import MyHeader from "./components/layout/header/MyHeader";
import Footer from "./components/layout/footer/Footer";
export const metadata: Metadata = {
  title: "Nice Shop",
  description: "Created By Nice Shop Team",
};
import { SessionProvider } from "next-auth/react";
//TODO
export default function RootLayout({
  children,
  params: { session, ...params },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {/* <SessionProvider session={session}> */}
        <MyHeader />
        {children}
        <Footer />
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
