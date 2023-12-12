import { ObjectId } from 'mongodb';

interface Item {
    _id: ObjectId
    title: string,
    state: boolean
}

interface ListProps {
    items: Item[]
}

interface AddFormProps {
    updateItems: (arg0: Item) => void;
    formTitle: string;
    updateFormTitle: (arg0: string) => void;
}

export type { ListProps, Item, AddFormProps }