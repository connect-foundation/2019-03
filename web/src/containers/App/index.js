import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const AppWrapper = styled.div``;

export default function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          gray_background: 'FAFAFA',
          gray_button: 'FDFDFD',
          gray_font: '999999',
          border: 'B2B2B2',
          white: 'FFFFFF',
          blue: '3897F1',
          blue_facebook: '375184',
        },
      }}
    >
      <AppWrapper>React App</AppWrapper>
    </ThemeProvider>
  );
}
