// mongo db
import { MongoClient } from "mongodb";
// types
import { GetDataBySectionResult, ProductOjectFromDB } from "@/types/props.module";


export async function getDataBySection(section:string): Promise<GetDataBySectionResult> {
  const dbUsername = process.env.MONGOUSERNAME;
  const dbPassword = process.env.MONGOPASSWORD;
  try {
    // connect to db
    const client = await MongoClient.connect(
      `mongodb+srv://${dbUsername}:${dbPassword}@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority`
      );
      const db = client.db("niceshop");
    // get Data
    const result = await db.collection("products").find({ section: section}).toArray()as ProductOjectFromDB[];
    // close connection
    await client.close();
    return {data:result ,success:true};
  } catch (error) {
    return {success:false,error:"server error in getting data"};
  }
}