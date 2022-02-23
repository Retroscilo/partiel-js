import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [inputValue, setInputValue] = useState();
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const newItems = [...items, inputValue];
    setItems(newItems)
  };
  return (
    <div className="App">
      <h1>Liste de courses</h1>
      {items.map(item => (
        <Item item={item} />
      ))}
      <div>
        <h2>Ajouter un item a la liste</h2>
        <textarea onChange={e => setInputValue(e.target.value)} style={{display: 'block', marginBottom: "20px", resize: "none"}} />
        <button onClick={addItem}>Ajouter</button>
      </div>
    </div>
  );
}

export default App;
