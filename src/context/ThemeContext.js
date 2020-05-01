import React, { useState, createContext } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    background: "#15202b",
    bgHover: "#192734",
    primaryColor: "#FFF",
    secondaryColor: "#8899a6",
    accentColor: "#CA2055",
    tertiaryColor: "#38444D",
    tertiaryColor2: "#202E3A",
    overlay: "rgba(110, 118, 125, 0.4)",
    font: "Poppins",
    bs1: "0 0 6px 3px rgba(0,0,0,0.1)",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
