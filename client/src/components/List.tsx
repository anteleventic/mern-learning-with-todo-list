interface Item {
    _id: string
    title: string,
    state: boolean
}

interface ListProps {
    items: Item[]
}

export default function List(props: ListProps) {
    function handleDoneAction(id: string, state: boolean) {
        fetch('http://localhost:3001/markDone',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    state: state
                }),
            }
        );
    }

    function handleRemoveAction(id: string) {
        fetch('http://localhost:3001/removeItem',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                }),
            }
        );
    }

    return <>
        <ul>
            {props.items?.map((item: Item, i: number) => 
                <li key={i}>
                    <span onClick={() => handleDoneAction(item._id, item.state)} className={"state" + (item.state ? ' done' : '')}>{item.title}</span>
                    <span onClick={() => handleRemoveAction(item._id)} className="remove">x</span>
                </li>
            )}
        </ul>
    </>
}