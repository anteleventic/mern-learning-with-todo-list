import { MongoClient } from 'mongodb';
import { config } from '../config/env';

export const database = new MongoClient(
    `mongodb://${config.mongoHost}:${config.mongoPort}/`, 
    {
        auth: {
            username: `${config.mongoUser}`, 
            password: `${config.mongoPw}`
        }
    }
);