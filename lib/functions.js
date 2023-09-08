// import { MongoClient } from "mongodb";
import { hash, compare } from "bcryptjs";

export const seprateNumbers = (number) => {
  const numberFormat = new Intl.NumberFormat("en-US");
  const output = numberFormat.format(number);
  return output;
};

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://b_amouzad1988:Bb123456@cluster1.e9a3rna.mongodb.net/`
  );

  return client;
}

export async function hashPassword(password) {
  const hashedPasswort = await hash(password, 12);
  return hashedPasswort;
}
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
