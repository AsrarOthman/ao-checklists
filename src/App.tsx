import React, { useState } from "react";

const CheckListApp = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAddItem = () => {
    if (text.trim() !== "") {
      const newItem = {
        id: new Date().getTime(),
        text: text.trim(),
        checked: false,
      };

      setItems([...items, newItem]);
      setText("");
    }
  };

  const handleToggleCheck = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };

  const handleDeleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <h1 style={{ fontFamily: "cursive", marginTop: 30 }}>Ameela Niqabisku</h1>
      <h1 style={{ fontFamily: "Arial", marginTop: 30 }}>Check List App</h1>

      <div style={{ marginTop: 20 }}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter an item"
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleToggleCheck(item.id)}
            />
            <span
              style={item.checked ? { textDecoration: "line-through" } : {}}
            >
              {item.text}
            </span>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckListApp;
