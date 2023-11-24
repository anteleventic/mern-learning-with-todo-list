import { Item } from "@shared/interfaces";

async function getItems() {
    const items = await fetch('http://localhost:3001/items');
    const res: Item[] = await items.json();
    return res;
}

function handleDoneAction(item: Item) {
    fetch('http://localhost:3001/markDone',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: item._id,
                state: item.state
            }),
        }
    );
}

function handleRemoveAction(item: Item) {
    fetch('http://localhost:3001/removeItem',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: item._id
            }),
        }
    );
}

async function handleSubmit(e: React.FormEvent, title: string, updateItems: (arg0: Item) => void, updateFormTitle: (arg0: string) => void) {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/newItem',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title
            }),
        }
    );

    const res: Item = await response.json();
    updateItems(res);
    updateFormTitle("");
}

export { handleDoneAction, handleRemoveAction, handleSubmit, getItems }