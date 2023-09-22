import { MongoClient } from "mongodb";


export async function getDataBySection(section:string) {
  const dbUsername = process.env.MONGOUSERNAME;
  const dbPassword = process.env.MONGOPASSWORD;
  try {
    // connect to db
    const client = await MongoClient.connect(
      `mongodb+srv://${dbUsername}:${dbPassword}@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority`
      );
      const db = client.db("niceshop");
    // get Data
    const result = await db.collection("products").find({ section: section}).toArray();
    // close connection
    await client.close();
    return (result);
  } catch (error) {
    return "server error in getting data";
  }
}