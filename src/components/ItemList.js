import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
};

const buttonStyle = {
  padding: "8px 12px",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  cursor: "pointer",
  marginRight: "10px",
};

const listStyle = {
  listStyleType: "none",
  padding: "0",
};

const linkStyle = {
  display: "block",
  fontSize: "16px",
  color: "blue",
  textDecoration: "none",
  marginTop: "10px",
};

const deleteButtonStyle = {
  marginLeft: "10px",
  padding: "5px 8px",
  backgroundColor: "red",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const doneItemStyle = {
  textDecoration: "line-through",
  color: "grey",
};

const containerStyle = {
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
};

const ItemList = () => {
  const { listId } = useParams();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [showDoneItems, setShowDoneItems] = useState(true);
  const { t } = useTranslation(); // Use useTranslation hook

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { name: newItem, done: false }]);
      setNewItem("");
    }
  };

  const removeItem = (indexToRemove) => {
    const updatedItems = items.filter((_, index) => index !== indexToRemove);
    setItems(updatedItems);
  };

  const toggleItemDone = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    setItems(updatedItems);
  };

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleToggleShowDoneItems = () => {
    setShowDoneItems(!showDoneItems);
  };

  return (
    <div style={containerStyle}>
      <h1>
        {t("Add Items to List")} {listId}
      </h1>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder={t("Enter item")}
        style={inputStyle}
      />
      <button onClick={addItem} style={buttonStyle}>
        {t("Add Item")}
      </button>
      <button onClick={handleToggleShowDoneItems} style={buttonStyle}>
        {showDoneItems ? t("Hide Done Items") : t("Show Done Items")}
      </button>
      <ul style={listStyle}>
        {items.map((item, index) => {
          if (!showDoneItems && item.done) return null;
          return (
            <li key={index}>
              <span
                onClick={() => toggleItemDone(index)}
                style={item.done ? doneItemStyle : {}}
              >
                {item.name}
              </span>
              <button
                onClick={() => removeItem(index)}
                style={deleteButtonStyle}
              >
                {t("Remove")}
              </button>
            </li>
          );
        })}
      </ul>
      <Link to="/shopping-list" style={linkStyle}>
        {t("Back to Shopping Lists")}
      </Link>
    </div>
  );
};

export default ItemList;
