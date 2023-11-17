import { useState } from "react";

interface Item {
    _id: string
    title: string,
    state: boolean
}

interface AddFormProps {
    updateItems: (arg0: Item) => void;
}

export default function AddForm(props: AddFormProps) {
    const [formTitle, setFormTitle] = useState<string|null>("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const response = await fetch('http://localhost:3001/newItem',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: formTitle
                }),
            }
        );
        const res: Item = await response.json();
        props.updateItems(res);
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={(e) => setFormTitle(e.target.value)}/>
            <button type="submit">Add Item</button>
        </form>
    </> 
}