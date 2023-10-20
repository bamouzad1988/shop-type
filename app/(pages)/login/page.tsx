// components
import AuthForm from "../../components/authForm/AuthForm";
// next
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";


async function Login() {
  const session = await getServerSession(options);
  if (session) {
    redirect("/");
  }
  return <AuthForm />;
}

export default Login;
