import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import { createGlobalStyle } from 'styled-components';
import { CookiesProvider } from 'react-cookie';
import { createUploadLink } from 'apollo-upload-client';
import App from './containers/App';

const cache = new InMemoryCache();
cache.writeData({
  data: {
    isLoggedIn: false,
  },
});

const client = new ApolloClient({
  link: createUploadLink({
    uri: `${process.env.REACT_APP_API_URL}/graphql`,
    credentials: 'include',
    fetchOptions: {
      credentials: 'include',
    },
  }),
  cache,
});

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'NotoSansKR';
      font-weight: 300;
      src: local('NotoSansKR'), local('NotoSansKR'),
           url('./fonts/NotoSansKR-Light.otf') format('otf'), 
    }
    body {
        padding: 0;
        margin: 0 auto;
        background-color:#fafafa;
        font-family:'NotoSansKR'
    }
`;

ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <App />
      </ApolloProvider>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
