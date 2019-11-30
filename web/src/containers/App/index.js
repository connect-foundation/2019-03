import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppWrapper from './AppWrapper';
import HomePage from '../HomePage';
import UserPage from '../UserPage';
import PostDetailPage from '../PostDetailPage';
import NewPostPage from '../NewPostPage';
import Navigation from '../Navigation';

export default function App() {
  const myInfo = {
    id: 1,
    username: '_so_02',
    name: '정소영',
    profileImage: 'https://i.pravatar.cc/150?img=9',
  };

  return (
    <AppWrapper>
      <ThemeProvider
        theme={{
          palette: {
            gray_background: '#FAFAFA',
            gray_button: '#FDFDFD',
            gray_font: '#999999',
            border: '#e6e6e6',
            border_secondary: '#dbdbdb',
            white: '#FFFFFF',
            blue: '#3897F1',
            blue_facebook: '#375184',
            pink: '#ee4957',
          },
        }}
      >
        <Navigation myInfo={myInfo} />
        <Route path="/" exact component={HomePage} />
        <Route path="/new/post" component={NewPostPage} />
        <Route path="/p/:postURL" exact component={PostDetailPage} />
        <Route path="/:username" exact component={UserPage} />
      </ThemeProvider>
    </AppWrapper>
  );
}
