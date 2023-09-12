import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from './apis/graphql/apolloClient'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
);
