import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Home from './src/containers/Home';

const client = new ApolloClient({
    uri: 'https://startwargraphql.herokuapp.com/?',
});
export default function App() {
    return (
        <ApolloProvider client={client}>
            <Home />
        </ApolloProvider>
    );
}
