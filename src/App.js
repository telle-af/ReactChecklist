import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>My Awesome Checklist</h1>
      <Checklist />
    </div>
  );
}

function Checklist() {
  const [list, setList] = useState([]);
  const [additionalItem, setAdditionalItem] = useState("");

  const addToList = () => {
    const newList = [...list];
    newList.push({ title: additionalItem });
    setList(newList);
    setAdditionalItem("");
  };

  const removeFromList = (index) => {
    const newList = [];
    for (let i = 0; i < list.length; i++) {
      if (index !== i) {
        newList.push(list[i]);
      }
    }
    setList(newList);
  };

  const clearList = () => {
    const newList = [];
    setList(newList);
  };

  return (
    <div className="App">
      <div className="input">
        <input
          type="text"
          value={additionalItem}
          onChange={(event) => setAdditionalItem(event.target.value)}
        />
        <button onClick={() => addToList()}>Add Item</button>
        <button onClick={() => clearList()}>Clear Checklist</button>
      </div>
      <div className="list">
        {list.map((item, index) => {
          return (
            <div>
              <ul>
                <li onClick={() => removeFromList(index)}>{item.title}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
