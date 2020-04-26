import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ThemeIcon } from "./Icons";
import { ThemeContext } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../styles/themes";

const Wrapper = styled.button`
	background: none;
	border: none;
	position: absolute;
	left: 90%;
	top: 5%;
	cursor: pointer;
`;

const ToggleTheme = () => {
	const [currentTheme, setCurrentTheme] = useState("dark");

	const { setTheme } = useContext(ThemeContext);

	const onClick = () => {
		if (currentTheme === "dark") {
			setTheme(theme => ({
				...theme,
				...lightTheme
			}));
			setCurrentTheme("light");
		} else {
			setTheme(theme => ({
				...theme,
				...darkTheme
			}));
			setCurrentTheme("dark");
		}
	};

	return (
		<Wrapper onClick={onClick}>
			<ThemeIcon />
		</Wrapper>
	);
};

export default ToggleTheme;
