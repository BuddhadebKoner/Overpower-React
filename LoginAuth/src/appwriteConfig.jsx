import { Client, Account } from 'appwrite';
import conf from './conf/config';

export const API_ENDPOINT = conf.appwriteUrl;
export const PROJECT_ID = conf.appwriteProjectID;


const client = new Client();

client
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);

// export the clint endpoint
export const account = new Account(client);

export default client;