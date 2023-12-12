import { MongoClient } from 'mongodb';
import { config } from './config';

export const database = new MongoClient(
    `mongodb://mongodb:${config.mongoPort}/`, 
    {
        auth: {
            username: `${config.mongoUser}`, 
            password: `${config.mongoPw}`
        }
    }
);