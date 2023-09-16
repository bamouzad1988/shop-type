import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/lib/functions";
import { MongoClient } from "mongodb";
import { validation } from "@/lib/helpers";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // @ts-ignore
      async authorize(credentials) {
        // getdatabase user and pass
        const dbUsername = process.env.MONGOUSERNAME;
        const dbPassword = process.env.MONGOPASSWORD;

        // extract entered username and password
        const username = credentials.username;
        const password = credentials.password;
        // validation
        const isValidUsername = validation({
          data: username,
          minLength: 7,
          type: "username",
        });
        const isValidPassword = validation({
          data: password,
          minLength: 7,
          type: "password",
        });

        if (!isValidUsername) {
          throw new Error(
            "نام کاربری شامل حروف و اعداد انگلیسی می باشد و حداقل 7 کاراکتر."
          );
        }
        if (!isValidPassword) {
          throw new Error(
            "کلمه عبور شامل حروف و اعداد انگلیسی می باشد و حداقل 7 کاراکتر."
          );
        }
        // connect to database
        const client = await MongoClient.connect(
          `mongodb+srv://${dbUsername}:${dbPassword}@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority`
        );
        const db = client.db("niceshop");
        // check if user exist or not
        const dbUser = await db
          .collection("users")
          .findOne({ username: username });
        if (!dbUser) {
          client.close();
          throw new Error("کاربر مورد نظر یافت نشد. لطفا ورود کنید.");
        }
        // check if passwords are mathces
        const isValid = await verifyPassword(password, dbUser.password);
        if (!isValid) {
          client.close();
          throw new Error("نام کاربری و کلمه ی عبور مطابقت ندارند.");
        }
        client.close();
        const user = {
          _id: "asxasxasxs",
          username: "asxasxsx",
        };
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
