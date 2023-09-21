import { hashPassword, verifyPassword } from "@/lib/functions";
import { validation } from "@/lib/helpers";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

export async function POST(req: Request, res: Response) {
  const session = await getServerSession(options);
  if (!session) {
    return new NextResponse("not athenticated", { status: 500 });
  }
  // check if user is logged in
  const dbUsername = process.env.MONGOUSERNAME;
  const dbPassword = process.env.MONGOPASSWORD;
  try {
    const body = await req.json();
    // get data from rquest body
    const { username, newPassword, oldPassword, newPasswordRepeat } = body;

    // check if password an repeat password are equal
    if (newPasswordRepeat !== newPassword) {
      return new NextResponse("not match passwords", { status: 400 });
    }
    // check if new password an old password are equal
    if (newPasswordRepeat === oldPassword) {
      return new NextResponse("passwords are equal", { status: 400 });
    }
    // validation
    const isValidUsername = validation({
      data: username,
      minLength: 1,
      type: "username",
    });
    const isValidpassword = validation({
      data: newPassword,
      minLength: 7,
      type: "password",
    });
    const isValidpasswordRepeat = validation({
      data: newPasswordRepeat,
      minLength: 7,
      type: "password",
    });
    const isValidOldPasswordassword = validation({
      data: oldPassword,
      minLength: 7,
      type: "password",
    });

    // check validation
    if (
      !isValidUsername ||
      !isValidpassword ||
      !isValidOldPasswordassword ||
      !isValidpasswordRepeat
    ) {
      return new NextResponse("invalid data", { status: 400 });
    }
    // connect to db
    const client = await MongoClient.connect(
      `mongodb+srv://${dbUsername}:${dbPassword}@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db("niceshop");
    const userCollection = db.collection("users");
    // check if user exist or not
    const user = await userCollection.findOne({ username: username });
    if (!user) {
      await client.close();
      return new NextResponse("user not found", { status: 400 });
    }
    const currentPassword = user.password;

    const arePasswordsEqual = await verifyPassword(
      oldPassword,
      currentPassword
    );
    // check old user password and old password are equal
    if (!arePasswordsEqual) {
      await client.close();
      return new NextResponse("old password is inccorect", { status: 400 });
    }
    // hash password
    const hashedPassword = await hashPassword(newPassword);
    // save to db
    const result = await userCollection.updateOne(
      { username: username },
      { $set: { password: hashedPassword } }
    );
    await client.close();
    return NextResponse.json(result);

    // return NextResponse.json(result);
  } catch (error) {
    return new NextResponse("server error in changing password", { status: 500 });
  }
}
