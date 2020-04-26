import ApolloClient from 'apollo-boost';
import {  GRAPHQL_PORT } from '../config';

const client = new ApolloClient({
	uri: GRAPHQL_PORT
});

export default client;
