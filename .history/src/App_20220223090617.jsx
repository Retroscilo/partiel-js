import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Item from "./Item"

function App() {
  const [ items, setItems ] = useState([])
  return (
    <div className="App">
      <h1>Liste de courses</h1>
      {items.map((item, i) => {
        <Item key={i} item={item} />
      })}
    </div>
  );
}

export default App;
