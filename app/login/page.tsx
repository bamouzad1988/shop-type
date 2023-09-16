import AuthForm from "../components/authForm/AuthForm";
import { getSession } from "next-auth/react";
function Login(session: any) {
  return <AuthForm />;
}
export async function getServerSideProps(ctx: { req: any }) {
  const session = await getSession({ req: ctx.req });

  if (session) {
    return {
      props: {
        session: session,
      },
    };
  } else {
    return {
      props: {
        session: null,
      },
    };
  }
}
export default Login;
