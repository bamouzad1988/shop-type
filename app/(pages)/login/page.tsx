import AuthForm from "../../components/authForm/AuthForm";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function Login() {
  const session = await getServerSession(options);
  if (session) {
    redirect("/");
  }
  return <AuthForm />;
}

export default Login;
