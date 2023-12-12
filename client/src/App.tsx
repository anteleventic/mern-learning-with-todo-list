import { useEffect, useState } from "react"
import { Item, AddFormProps } from '@shared/interfaces';
import { getItems } from "./functions/db";
import AddForm from './components/AddForm';
import List from './components/List';
import './App.css';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [formTitle, setFormTitle] = useState<string>("");
  
  useEffect(() => {(
    async () => {
      setItems(await getItems());
    })();
  }, [items, formTitle]);

  const addFormProps: AddFormProps = {
    updateItems: (item: Item) => {
      setItems([...items, item]);
    },
    formTitle: formTitle,
    updateFormTitle: (title: string) => {
      setFormTitle(title);
    }
  }

  return <>
    <div className="App">
      <AddForm {...addFormProps} />
      <List items={items} />
    </div>
  </>;
}

export default App;
