import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "./ThemeContext";

const linkStyle = {
  display: "block",
  fontSize: "18px",
  marginTop: "20px",
  textDecoration: "none",
  color: "blue",
};

const containerStyle = {
  textAlign: "center",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "5px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
};

const Home = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleButtonStyle = {
    ...buttonStyle,
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#333",
  };

  const languageButtonsStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  };

  return (
    <div
      style={{
        ...containerStyle,
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
      }}
    >
      <h1>{t("Welcome to My Shopping List App")}</h1>
      <div style={languageButtonsStyle}>
        <button
          style={{ ...buttonStyle, backgroundColor: "blue" }}
          onClick={() => changeLanguage("en")}
        >
          {t("English")}
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: "red" }}
          onClick={() => changeLanguage("cz")}
        >
          {t("Czech")}
        </button>
      </div>
      <button style={toggleButtonStyle} onClick={toggleTheme}>
        {isDarkMode ? t("Switch to Light Mode") : t("Switch to Dark Mode")}
      </button>
      <Link to="/shopping-list" style={linkStyle}>
        {t("Go To Shopping Lists")}
      </Link>
    </div>
  );
};

export default Home;
