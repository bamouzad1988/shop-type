import { validation } from "@/lib/helpers";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const dbUsername = process.env.MONGOUSERNAME;
  const dbPassword = process.env.MONGOPASSWORD;
  try {
    const body = await request.json();
    // get data from rquest body
    const { username, name, description, image, model, discount,price, section,productType } =
      body;
    // validation
    const isValidUsername = validation({
      data: username,
      minLength: 7,
      type: "username",
    });
    const isValidName = validation({
      data: name,
      minLength: 3,
      type: "name",
    });
    const isValidDescription = validation({
      data: description,
      minLength: 3,
      type: "description",
    });
    const isValidSection = validation({
      data: section,
      minLength: 3,
      type: "section",
    });
    const isValidproductType = validation({
      data: productType,
      minLength: 3,
      type: "productType",
    });
    const isValidImage = validation({
      data: image,
      minLength: 3,
      type: "image",
    });
    const isValidPrice = validation({
      data: image,
      minLength: 1,
      type: "price",
    });
    if (
      !isValidUsername ||
      !isValidSection ||
      !isValidName ||
      !isValidDescription ||
      !isValidImage||
      !isValidproductType||
      !isValidPrice
    ) {
      return new NextResponse("invalid data!!", { status: 400 });
    }
    // connect to db
    const client = await MongoClient.connect(
      `mongodb+srv://${dbUsername}:${dbPassword}@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db("niceshop");
    // check if user exist or not
    const existingUser = await db
      .collection("users")
      .findOne({ username: username });
    if (!existingUser) {
      await client.close();
      return new NextResponse("not athenticated", { status: 400 });
    }
    // create new user
    const result = await db.collection("products").insertOne({
      username: username,
      name: name,
      price: price,
      description: description,
      image: image,
      model: model,
      discount: discount,
      section: section,
      date:new Date()
    });
    // close connection
    await client.close();
    return NextResponse.json(result);
  } catch (error) {
    return new NextResponse("server error in adding product", { status: 500 });
  }
}
