import AuthForm from "../components/authForm/AuthForm";
import { GetSessionParams, getSession } from "next-auth/react";
function Login() {
  return <AuthForm />;
}

export default Login;
