import React, { useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeContext } from "./context/ThemeContext";
import Router from './Route';
import Auth from './components/Auth/Auth';

const App = () => {
	const { theme } = useContext(ThemeContext);

	const loggedIn = false;

	return (
		<StyledThemeProvider theme={theme}>
			<GlobalStyle
				background={theme.background}
				primaryColor={theme.primaryColor}
				font={theme.font}
			/>
			{ loggedIn ? <Router /> : <Auth />}
		</StyledThemeProvider>
	);
};

export default App;
