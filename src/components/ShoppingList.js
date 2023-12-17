import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import AddListModal from "./AddListModal";
import { useTranslation } from "react-i18next";

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

const archiveButtonStyle = {
  marginLeft: "10px",
  padding: "5px 8px",
  backgroundColor: "orange",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const containerStyle = {
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
};

const listContainerStyle = {
  maxHeight: "300px", // Adjust as needed
  overflowY: "auto",
};

const ShoppingList = () => {
  const { t } = useTranslation();
  const [lists, setLists] = useState([]);
  const [isAddListModalOpen, setIsAddListModalOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const [removeIndex, setRemoveIndex] = useState(null);

  const openAddListModal = () => {
    setIsAddListModalOpen(true);
  };

  const closeAddListModal = () => {
    setIsAddListModalOpen(false);
  };

  const openDeleteConfirmation = (index) => {
    setRemoveIndex(index);
    setIsDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(false);
  };

  const handleAddList = (newListName) => {
    const newList = { name: newListName, items: [], archived: false };
    setLists([...lists, newList]);
    setIsAddListModalOpen(false);
  };

  const removeList = () => {
    if (removeIndex !== null) {
      const updatedLists = lists.filter((_, index) => index !== removeIndex);
      setLists(updatedLists);
      setRemoveIndex(null);
      closeDeleteConfirmation();
    }
  };

  const archiveList = (index) => {
    const updatedLists = lists.map((list, idx) =>
      idx === index ? { ...list, archived: true } : list
    );
    setLists(updatedLists);
  };

  const activeLists = lists.filter((list) => !list.archived);
  const archivedLists = lists.filter((list) => list.archived);

  return (
    <div style={containerStyle}>
      <h1>{t("Shopping Lists")}</h1>
      <button onClick={openAddListModal} style={buttonStyle}>
        {t("Add New List")}
      </button>
      <h2>{t("Active Lists")}</h2>
      <div style={listContainerStyle}>
        <ul style={listStyle}>
          {activeLists.map((list, index) => (
            <li key={index}>
              <Link to={`/shopping-list/${index}`} style={linkStyle}>
                {list.name}
              </Link>
              {!list.archived && (
                <React.Fragment>
                  <button
                    onClick={() => openDeleteConfirmation(index)}
                    style={deleteButtonStyle}
                  >
                    {t("Delete")}
                  </button>
                  <button
                    onClick={() => archiveList(index)}
                    style={archiveButtonStyle}
                  >
                    {t("Archive")}
                  </button>
                </React.Fragment>
              )}
            </li>
          ))}
        </ul>
      </div>
      <h2>{t("Archived Lists")}</h2>
      <div style={listContainerStyle}>
        <ul style={listStyle}>
          {archivedLists.map((list, index) => (
            <li key={index}>
              <Link to={`/shopping-list/${index}`} style={linkStyle}>
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Modal
        isOpen={isDeleteConfirmationOpen}
        onRequestClose={closeDeleteConfirmation}
        contentLabel="Confirm Delete Modal"
      >
        <div style={containerStyle}>
          <h2>{t("Confirm Delete?")}</h2>
          <button onClick={removeList} style={buttonStyle}>
            {t("Yes")}
          </button>
          <button onClick={closeDeleteConfirmation} style={buttonStyle}>
            {t("No")}
          </button>
        </div>
      </Modal>
      <AddListModal
        isOpen={isAddListModalOpen}
        onRequestClose={closeAddListModal}
        onAddList={handleAddList}
      />
    </div>
  );
};

export default ShoppingList;
