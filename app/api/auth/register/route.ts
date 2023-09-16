import { hashPassword } from "@/lib/functions";
import { validation } from "@/lib/helpers";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const dbUsername = process.env.MONGOUSERNAME;
  const dbPassword = process.env.MONGOPASSWORD;
  try {
    const body = await request.json();
    // get data from rquest body
    const { username, password } = body;
    // validation
    const isValidUsername = validation({
      data: username,
      minLength: 4,
      type: "username",
    });
    const isValidpassword = validation({
      data: password,
      minLength: 7,
      type: "password",
    });
    if (!isValidUsername || !isValidpassword) {
      return new NextResponse("invalid data", { status: 400 });
    }
    // hash password
    const hashedPassword = await hashPassword(password);

    // connect to db
    const client = await MongoClient.connect(
      `mongodb+srv://${dbUsername}:${dbPassword}@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db("niceshop");
    // check if user exist or not
    const existingUser = await db
      .collection("users")
      .findOne({ username: username });
    if (existingUser) {
      await client.close();
      return new NextResponse("you signed before", { status: 400 });
    }
    // create new user
    const result = await db.collection("users").insertOne({
      username: username,
      password: hashedPassword,
    });
    // close connection
    await client.close();
    return NextResponse.json(result);
  } catch (error) {
    return new NextResponse("server error bijan", { status: 500 });
  }
}
