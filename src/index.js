import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import client from "./apollo/client";
import { ThemeProvider } from "./context/ThemeContext";

const RootApp = () => (
  <ApolloProvider client={client}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
render(<RootApp />, document.getElementById("root"));
