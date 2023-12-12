import express, { Express } from 'express';
import cors from 'cors';
import { newItem, markDone, removeItem, getItems, startUp } from './database/functions';

const app: Express = express();

/** Define App usage */
app.use(cors());
app.use(express.json());

/** Define Routes */
app.post('/newItem', newItem);
app.post('/markDone', markDone);
app.post('/removeItem', removeItem);
app.get('/items', getItems);
app.get('/', startUp);

export { app }