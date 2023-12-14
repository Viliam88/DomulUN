import React, { useState } from "react";
import Modal from "react-modal";

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
};

const containerStyle = {
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
};

const AddListModal = ({ isOpen, onRequestClose, onAddList }) => {
  const [newListName, setNewListName] = useState("");

  const handleInputChange = (e) => {
    setNewListName(e.target.value);
  };

  const handleAddList = () => {
    if (newListName.trim() !== "") {
      onAddList(newListName);
      setNewListName("");
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add New List Modal"
    >
      <div style={containerStyle}>
        <h2>Add New Shopping List</h2>
        <input
          type="text"
          value={newListName}
          onChange={handleInputChange}
          placeholder="Enter list name"
          style={inputStyle}
        />
        <button onClick={handleAddList} style={buttonStyle}>
          Add List
        </button>
      </div>
    </Modal>
  );
};

export default AddListModal;
