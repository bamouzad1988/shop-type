import { hashPassword } from "@/lib/functions";
import { RegisterValidation } from "@/types/props.module";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // get data from rquest body
    const { email, password } = body;
    // validation
    const isValidEmail = validation({
      data: email,
      minLength: 4,
      type: "email",
    });
    const isValidpassword = validation({
      data: password,
      minLength: 7,
      type: "password",
    });
    if (!isValidEmail || !isValidpassword) {
      return new NextResponse("invalid data", { status: 400 });
    }
    // hash password
    const hashedPassword = await hashPassword(password);
    // connect to db
    const client = await MongoClient.connect(
      `mongodb+srv://b_amouzad1988:B1ttQu2H9ntG8vWT@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db("niceshop");
    // check if user exist or not
    const existingUser = await db.collection("users").findOne({ email: email });
    if (existingUser) {
      await client.close();
      return new NextResponse("you signed before", { status: 400 });
    }
    // create new user
    const result = await db.collection("users").insertOne({
      email: email,
      password: hashedPassword,
    });
    // close connection
    await client.close();
    return NextResponse.json(result);
  } catch (error) {
    return new NextResponse("server error bijan", { status: 500 });
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
