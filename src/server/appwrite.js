import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.APPWRITE_KEY ? process.env.APPWRITE_KEY : "");

export const account = new Account(client);

// const user = await account.createJWT();

export { ID } from "appwrite";
