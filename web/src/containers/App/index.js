import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppWrapper from './AppWrapper';
import HomePage from '../HomePage';
import UserPage from '../UserPage';
import PostDetailPage from '../PostDetailPage';
import NewPostPage from '../NewPostPage';
import EditPostPage from '../EditPostPage';
import Navigation from '../Navigation';
import HashTagPage from '../HashTagPage';
import SettingPage from '../SettingPage';
import EditProfilePage from '../EditProfilePage';
import ChangePasswordPage from '../ChangePasswordPage';
import RegisterAppPage from '../RegisterAppPage';

const settingPageList = [
  {
    title: '프로필 편집',
    url: 'edit/profile',
    PageComponent: EditProfilePage,
  },
  {
    title: '비밀번호 변경',
    url: 'change/password',
    PageComponent: ChangePasswordPage,
  },
  {
    title: '새 어플리케이션 등록',
    url: 'applications/register',
    PageComponent: RegisterAppPage,
  },
];

export default function App() {
  const myInfo = {
    id: 1,
    username: '_so_02',
    name: '정소영',
    profileImage: 'https://i.pravatar.cc/150?img=9',
    email: 'soyeong@naver.com',
    cellPhone: '010-0101-0101',
  };

  return (
    <AppWrapper>
      <ThemeProvider
        theme={{
          palette: {
            background: '#FAFAFA',
            secondary: '#6C757D',
            light: '#F8F9FA',
            gray_bright: '#F5F5F5',
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
        <Route path="/edit/:postURL" exact component={EditPostPage} />
        <Route path="/p/:postURL" exact component={PostDetailPage} />
        <Route path="/h/:hashTag" exact component={HashTagPage} />
        <Route
          path="/setting"
          component={props => (
            <SettingPage
              {...props}
              myInfo={myInfo}
              pageList={settingPageList}
            />
          )}
        />
        <Route
          path="/:username"
          exact
          render={props => <UserPage {...props} myInfo={myInfo} />}
        />
      </ThemeProvider>
    </AppWrapper>
  );
}
