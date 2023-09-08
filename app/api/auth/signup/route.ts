import { hashPassword } from "@/lib/functions";
import { RegisterValidation } from "@/types/props.module";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    if (!email || !password) {
      return new NextResponse("email or password is empty", { status: 300 });
    }
    const hashedPassword = await hashPassword(password);

    const client = await MongoClient.connect(
      `mongodb+srv://b_amouzad1988:B1ttQu2H9ntG8vWT@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db("niceshop");

    const result = await db.collection("users").insertOne({
      email: email,
      password: hashedPassword,
    });
    await client.close();

    console.log(result);
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

  if (type === "email" && !trimedData.includes("@")) {
    return false;
  }

  return true;
};
