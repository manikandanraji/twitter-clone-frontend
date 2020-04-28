import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../styles/themes";
import Button from "../styles/Button";

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
		<Button sm onClick={onClick}>
			Change Theme
		</Button>
	);
};

export default ToggleTheme;
