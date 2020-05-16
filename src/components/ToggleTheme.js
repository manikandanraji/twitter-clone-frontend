import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../styles/themes";
import { ThemeIcon } from "./Icons";

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 0.7rem;
  margin-bottom: 1rem;
  cursor: pointer;

  p {
    margin-left: 0.4rem;
  }
`;

const ToggleTheme = () => {
  const localSt = localStorage.getItem("theme");
  const [currentTheme, setCurrentTheme] = useState(localSt ? localSt : "light");

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme((theme) => ({
        ...theme,
        ...lightTheme,
      }));
      localStorage.setItem("theme", "light");
      setCurrentTheme("light");
    } else {
      setTheme((theme) => ({
        ...theme,
        ...darkTheme,
      }));
      localStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
    }
  };

  return (
    <Wrapper onClick={toggleTheme}>
      <ThemeIcon sm color={theme.accentColor} />
      <p>Theme</p>
    </Wrapper>
  );
};

export default ToggleTheme;
