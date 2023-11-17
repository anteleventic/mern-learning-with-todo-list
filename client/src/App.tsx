import AddForm from './components/AddForm';
import List from './components/List';
import './App.css';
import { useEffect, useState } from "react"

interface Item {
    _id: string
    title: string,
    state: boolean
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
      (async () => {
          const items = await fetch('http://localhost:3001/items');
          const res: Item[] = await items.json();
          setItems(res);
      })();
  }, [items]);

  const updateItems = (item: Item) => {
    setItems([...items, item]);
  }

  return (
    <div className="App">
      <AddForm updateItems={updateItems} />
      <List items={items} />
    </div>
  );
}

export default App;
