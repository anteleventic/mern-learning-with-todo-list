import express, { Express } from 'express';
import cors from 'cors';
import { database } from './database/config';
import { newItem, markDone, removeItem, getItems, startUp } from './database/functions';

const app: Express = express();

/** Start the app */
const runApp = async () => {
    await database.connect();
    app.listen(3000, () => console.log(`Listening on port 3000`));
}

/** Define App usage */
app.use(cors());
app.use(express.json());

/** Define Routes */
app.post('/newItem', newItem);
app.post('/markDone', markDone);
app.post('/removeItem', removeItem);
app.get('/items', getItems);
app.get('/', startUp);

export { runApp }