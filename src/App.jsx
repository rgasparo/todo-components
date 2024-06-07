// src/App.jsx
import { useState, useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  // Load items from localStorage on component mount
  useEffect(() => {
    const storedItems = localStorage.getItem("todoItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Save items
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="w-full mx-auto">
      <Input value={newItem} onChange={setNewItem} onSubmit={handleAddItem} />
      <List items={items} onDelete={handleDeleteItem} />
    </div>
  );
}

export default App;
