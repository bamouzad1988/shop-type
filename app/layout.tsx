// css
import "./styles/main.scss";
// fonts
import "@/public/fonts/themify-icons/themify-icons.css";
// next
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
// components
import MyHeader from "./components/layout/header/MyHeader";
import Footer from "./components/layout/footer/Footer";
import NextAuthProvider from "./components/reusableComponents/NextAuthProvider";
// route
import { options } from "./api/auth/[...nextauth]/options";
import ReduxProvider from "./store/ReduxProvider";
// REDUX

export const metadata: Metadata = {
  title: "Nice Shop",
  description: "Created By Nice Shop Team",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);
  return (
    <html lang="fa" dir="rtl">
      <body>
        <NextAuthProvider session={session}>
          <ReduxProvider>
            <MyHeader />
            {children}
            <Footer />
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
