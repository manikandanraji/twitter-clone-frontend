import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-boost";
import { GRAPHQL_SERVER } from "../config";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: GRAPHQL_SERVER,
  request: (operation) => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        Authorization: token ? token : "",
      },
    });
  },
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token"),
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
});

export default client;
