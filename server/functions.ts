import { ObjectId } from 'mongodb';
import { database } from './database';
import { Request, Response} from 'express';
import { Item } from '@shared/interfaces';

const newItem = async (req: Request, res: Response) => {
    const db = database.db('todos');
    const itemsCollection = db.collection<Item>('items');

    const result = await itemsCollection.insertOne({
        _id: new ObjectId(),
        title: req.body.title,
        state: false
    });

    console.log(result);

    res.send({message: `New Item is: ${req.body.title}`});
    res.end();
}

const markDone = async (req: Request, res: Response) => {
    const db = database.db('todos');
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
}

const removeItem = async (req: Request, res: Response) => {
    const db = database.db('todos');
    const itemsCollection = db.collection<Item>('items');

    const result = await itemsCollection.deleteOne({
        _id: new ObjectId(req.body.id),
    });
    res.end();
}

const getItems = async(req:Request, res: Response) => {
    const db = database.db('todos');
    const itemsCollection = db.collection<Item>('items');

    const result = await itemsCollection.find().toArray();
    res.send(result);
    res.end();
}

const startUp = async (req: Request, res: Response) => {
    res.end('Server is working fine!');
}

export { newItem, markDone, removeItem, getItems, startUp }