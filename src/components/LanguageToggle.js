import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageToggle = () => {
  const { toggleLanguage } = useLanguage();

  return <button onClick={toggleLanguage}>Switch Language</button>;
};

export default LanguageToggle;
