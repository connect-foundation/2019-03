import React from 'react';
import { Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import HomePage from '../HomePage';
import UserPage from '../UserPage';

const AppWrapper = styled.div``;

export default function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          gray_background: '#FAFAFA',
          gray_button: '#FDFDFD',
          gray_font: '#999999',
          border: '#B2B2B2',
          white: '#FFFFFF',
          blue: '#3897F1',
          blue_facebook: '#375184',
        },
      }}
    >
      <Route path="/" exact component={HomePage} />
      <Route path="/:username" component={UserPage} />
    </ThemeProvider>
  );
}
