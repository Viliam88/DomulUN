import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(); // Explicitly exporting ThemeContext

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
  };

  // Apply dark mode styles to the entire page
  if (isDarkMode) {
    document.body.style.backgroundColor = "#000"; // Set background color to black
    document.body.style.color = "#fff"; // Set text color to white
    // You can add more styles here to customize elements in dark mode
  } else {
    document.body.style.backgroundColor = "#fff"; // Reset background color to white
    document.body.style.color = "#000"; // Reset text color to black
    // Reset other styles if needed for light mode
  }

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
