import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { withCookies } from 'react-cookie';

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
import SignInPage from '../AccountPage/SignIn';
import SignUpPage from '../AccountPage/SignUp';
import AuthRoute from './AuthRoute';
import AccountRoute from './AccountRoute';
import { UserProvider } from './UserContext';

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

function App({ cookies }) {
  const [isAuth, setIsAuth] = useState(false);
  const myInfo = cookies.get('myInfo');

  return (
    <AppWrapper>
      <UserProvider value={myInfo}>
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
          <AuthRoute path="/" myInfo={myInfo}>
            <Navigation myInfo={myInfo} />
            <Route path="/" exact component={HomePage} />
            <Route path="/new/post" exact component={NewPostPage} />
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
          </AuthRoute>
          <AccountRoute path="/account" myInfo={myInfo}>
            <Route
              path="/account/signin"
              exact
              render={props => <SignInPage {...props} setIsAuth={setIsAuth} />}
            />
            <Route
              path="/account/signup"
              exact
              render={props => <SignUpPage {...props} setIsAuth={setIsAuth} />}
            />
          </AccountRoute>
        </ThemeProvider>
      </UserProvider>
    </AppWrapper>
  );
}

export default withCookies(App);
