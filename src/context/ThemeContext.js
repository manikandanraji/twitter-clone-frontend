import React, { useState, createContext } from "react";
import { darkTheme, lightTheme } from "../styles/themes";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const localSt = localStorage.getItem("theme");

  const [theme, setTheme] = useState(
    localSt ? (localSt === "dark" ? darkTheme : lightTheme) : lightTheme
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
