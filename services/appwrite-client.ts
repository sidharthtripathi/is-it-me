import { Client, Account } from 'appwrite';
const client = new Client()
client.setEndpoint("http://localhost/v1").setProject("67a8c2f9002b0e5f9f5a")
export const account = new Account(client)
export {ID} from 'appwrite'