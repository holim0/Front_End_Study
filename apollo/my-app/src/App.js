import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import RickAndMorty from "./RickAndMorty";

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
});

function App() {
    return (
        <ApolloProvider client={client}>
            <RickAndMorty />
        </ApolloProvider>
    );
}

export default App;
