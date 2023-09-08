import { connectToDatabase, hashPassword } from "@/lib/functions";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    const client = await MongoClient.connect(
      `mongodb+srv://b_amouzad1988:B1ttQu2H9ntG8vWT@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority`
    );
    // const client = await connectToDatabase();
    const db = client.db("niceshop");
    console.log(db);
    const hashedPassword = await hashPassword(password);

    const result = await db.collection("users").insertOne({
      email: email,
      password: hashedPassword,
    });

    console.log(result);

    client.close();
    // const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json; charset=UTF-8",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });
    // return NextResponse.json(data);
  } catch (error) {
    console.log(
      "[REGISTERrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr_POST]",
      error
    );
    return new NextResponse("Internal errorrrrrrrrrrrrrr", { status: 500 });
  }
}
