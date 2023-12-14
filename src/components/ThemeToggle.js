import React from "react";
import { useTheme } from "./ThemeContext";
import { useTranslation } from "react-i18next";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#333",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      {isDarkMode ? t("Light Mode") : t("Dark Mode")}
    </button>
  );
};

export default ThemeToggle;
