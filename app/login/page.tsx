import AuthForm from "../components/authForm/AuthForm";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
function Login() {
  return <AuthForm />;
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, options);
  console.log("**********************************************");
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Login;
