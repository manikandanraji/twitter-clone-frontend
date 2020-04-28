import React, { useState, createContext } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState({
		background: "#192734",
		primaryColor: "#FFF",
		secondaryColor: "#5B6A78",
		// accentColor: "#CA2055",
		accentColor: "#1A91DA",
		tertiaryColor: "#38444D",
		tertiaryColor2: "#202E3A",
		font: 'Poppins',
	});

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
