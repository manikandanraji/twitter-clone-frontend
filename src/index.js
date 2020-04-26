import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import client from './apollo/client';

render(
	<ApolloProvider client={client}>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</ApolloProvider>,
	document.getElementById("root")
);
