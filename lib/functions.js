// import { MongoClient } from "mongodb";
import { RegisterValidation } from "@/types/props.module";
import { compare, hash } from "bcryptjs";

export const seprateNumbers = (number) => {
  const numberFormat = new Intl.NumberFormat("en-US");
  const output = numberFormat.format(number);
  return output;
};

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://b_amouzad1988:B1ttQu2H9ntG8vWT@cluster1.e9a3rna.mongodb.net/?retryWrites=true&w=majority`
  );

  return client;
}

export async function hashPassword(password) {
  const hashedPasswort = hash(password, 12);
  return hashedPasswort;
}
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);

  return isValid;
}
