"use client";

import { SessionProvider, getSession } from "next-auth/react";
import { Session } from "next-auth";

type Props = {
  children: React.ReactNode;
  session: Session;
};
function NextAuthProvider({ children, session }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthProvider;
