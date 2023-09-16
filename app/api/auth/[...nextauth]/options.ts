import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/lib/functions";
import { MongoClient } from "mongodb";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // @ts-ignore
      async authorize(credentials) {
        const dbUsername = process.env.MONGOUSERNAME;
        const dbPassword = process.env.MONGOPASSWORD;

        const client = await MongoClient.connect(
          `mongodb+srv://${dbUsername}:${dbPassword}@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority`
        );
        const db = client.db("niceshop");
        // check if user exist or not
        const user = await db
          .collection("users")
          .findOne({ username: credentials.username });
        if (!user) {
          client.close();
          // ......credentials...credentials...credentials......credentials...credentials...
        }
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!isValid) {
          client.close();
          throw new Error("password and user are not match");
        }

        client.close();
        return { username: user.username };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
