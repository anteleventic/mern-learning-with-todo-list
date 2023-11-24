import { MongoClient, ObjectId } from 'mongodb';
import { Item } from '@shared/interfaces';
import express, {Express, Request, Response} from 'express';
import cors from 'cors';
const app: Express = express();
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env;

const uri = "mongodb+srv://{name}:{pw}@aleventic.t5yg8vg.mongodb.net/?retryWrites=true&w=majority";
const localUri = `mongodb://mongodb:27017/`;
const client = new MongoClient(localUri, {auth: {username: DB_USER, password: DB_PASSWORD}});


app.use(cors());
app.use(express.json());

app.post('/newItem', async (req: Request, res: Response) => {
    const db = client.db('todos');
    const itemsCollection = db.collection<Item>('items');

    const result = await itemsCollection.insertOne({
        _id: new ObjectId(),
        title: req.body.title,
        state: false
    });

    console.log(result);

    res.send({message: `New Item is: ${req.body.title}`});
    res.end();
});

app.post('/markDone', async (req: Request, res: Response) => {
    const db = client.db('todos');
    const itemsCollection = db.collection<Item>('items');

    const result = await itemsCollection.updateOne(
        {
            _id: new ObjectId(req.body.id)
        },
        {
            $set: {
                state: req.body.state ? false : true
            }
        }
    );

    res.end();
});

app.post('/removeItem', async (req: Request, res: Response) => {
    const db = client.db('todos');
    const itemsCollection = db.collection<Item>('items');

    const result = await itemsCollection.deleteOne({
        _id: new ObjectId(req.body.id),
    });
    res.end();
});

app.get('/items', async(req:Request, res: Response) => {
    const db = client.db('todos');
    const itemsCollection = db.collection<Item>('items');

    const result = await itemsCollection.find().toArray();
    res.send(result);
    res.end();
});

app.get('/', async (req: Request, res: Response) => {
    res.end('Server is working fine!');
});

async function run() {
    await client.connect();
    app.listen(3000, () => console.log('Listening on port 3000'));
}

run()