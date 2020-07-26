import { MongoClient } from "https://deno.land/x/mongo@v0.9.1/mod.ts";

const MONGO_URL = 'mongodb+srv://mathias:BoAMPONGBiG11@cluster0-vfnxn.mongodb.net/lawfirm?retryWrites=true&w=majority'

const client = new MongoClient();

client.connectWithUri(MONGO_URL)

console.log("MongoDB connected")

const db = client.database('lawfirm')

export default db
