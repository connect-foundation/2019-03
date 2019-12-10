import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { createGlobalStyle } from 'styled-components';
import App from './containers/App';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
});

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color:#fafafa;
    }
`;

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
