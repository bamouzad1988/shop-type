// css
import "./styles/main.scss";
import "@/public/fonts/themify-icons/themify-icons.css";

import type { Metadata } from "next";
import MyHeader from "./components/layout/header/MyHeader";
import Footer from "./components/layout/footer/Footer";
import NextAuthProvider from "./components/reusableComponents/NextAuthProvider";
export const metadata: Metadata = {
  title: "Nice Shop",
  description: "Created By Nice Shop Team",
};

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
        <NextAuthProvider session={session}>
          <MyHeader />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
