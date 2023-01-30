import React, { useState } from "react";
import TodoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea onChange={handleChange} value={inputText} onClick={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              item={todoItem}
              onChecked={deleteItem}
              id={index}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
