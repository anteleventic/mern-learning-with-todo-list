import { AddFormProps } from '@shared/interfaces';
import { handleSubmit } from 'src/functions/db';

export default function AddForm(props: AddFormProps) {
    return <>
        <form onSubmit={(e) => handleSubmit(e, props.formTitle, props.updateItems, props.updateFormTitle)}>
            <input type="text" name="title" value={props.formTitle} onChange={(e) => props.updateFormTitle(e.target.value)}/>
            <button type="submit">Add Item</button>
        </form>
    </> 
}