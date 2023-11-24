import { Item, ListProps } from '@shared/interfaces';
import { handleDoneAction, handleRemoveAction } from 'src/functions/db';

export default function List(props: ListProps) {
    return <>
        <ul>
            {props.items?.map((item: Item, i: number) => 
                <li key={i}>
                    <span onClick={() => handleDoneAction(item)} className={"state" + (item.state ? ' done' : '')}>{item.title}</span>
                    <span onClick={() => handleRemoveAction(item)} className="remove">x</span>
                </li>
            )}
            {props.items.length === 0 && 'No Items found'}
        </ul>
    </>
}