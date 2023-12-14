import React, { createContext, useState } from "react";

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [items, setItems] = useState([]);

  const addList = (list) => {
    setLists([...lists, list]);
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <ShoppingContext.Provider value={{ lists, items, addList, addItem }}>
      {children}
    </ShoppingContext.Provider>
  );
};
