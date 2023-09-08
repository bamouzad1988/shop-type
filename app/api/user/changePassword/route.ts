import { hashPassword, verifyPassword } from "@/lib/functions";
import { RegisterValidation } from "@/types/props.module";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  // check if user is logged in
  try {
    const body = await request.json();
    // get data from rquest body
    const { email, password, oldPassword } = body;
    // validation
    const isValidEmail = validation({
      data: email,
      minLength: 1,
      type: "email",
    });
    const isValidpassword = validation({
      data: password,
      minLength: 2,
      type: "password",
    });
    const isValidOldPasswordassword = validation({
      data: oldPassword,
      minLength: 2,
      type: "password",
    });
    if (!isValidEmail || !isValidpassword || !isValidOldPasswordassword) {
      return new NextResponse("invalid data", { status: 400 });
    }
    // connect to db
    const client = await MongoClient.connect(
      `mongodb+srv://b_amouzad1988:B1ttQu2H9ntG8vWT@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db("niceshop");
    const userCollection = db.collection("users");
    // check if user exist or not
    const user = await userCollection.findOne({ email: email });
    if (!user) {
      await client.close();
      return new NextResponse("user not found", { status: 400 });
    }
    const currentPassword = user.password;
    const arePasswordsEqual = verifyPassword(oldPassword, currentPassword);
    if (!arePasswordsEqual) {
      await client.close();
      return new NextResponse("old password is inccorect", { status: 400 });
    }
    // hash password
    const hashedPassword = await hashPassword(password);
    const result = await userCollection.updateOne(
      { email: email },
      { $set: { password: hashedPassword } }
    );
    console.log(result);
    await client.close();
    return NextResponse.json(result);

    // return NextResponse.json(result);
  } catch (error) {
    return new NextResponse("server error", { status: 500 });
  }
}

const validation = (params: RegisterValidation) => {
  const { data, minLength, type } = params;
  const trimedData = data.trim();
  if (!trimedData || trimedData.length < minLength) {
    return false;
  }

  if (
    type === "email" &&
    !trimedData.includes("@") &&
    !trimedData.includes(".")
  ) {
    return false;
  }

  return true;
};
