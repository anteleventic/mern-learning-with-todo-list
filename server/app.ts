import { database } from './database';
import { newItem, markDone, removeItem, getItems, startUp } from './functions';
import express, { Express } from 'express';
import cors from 'cors';
const app: Express = express();

app.use(cors());
app.use(express.json());

app.post('/newItem', newItem);

app.post('/markDone', markDone);

app.post('/removeItem', removeItem);

app.get('/items', getItems);

app.get('/', startUp);

async function runApp() {
    await database.connect();
    app.listen(3000, () => console.log('Listening on port 3000'));
}

runApp()