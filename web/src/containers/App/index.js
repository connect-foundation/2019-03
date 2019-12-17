import React, { useState, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { withCookies } from 'react-cookie';
import AppWrapper from './AppWrapper';
import Navigation from '../Navigation';
import Loading from '../../components/Loading';
import { UserProvider } from './UserContext';
import AuthRoute from './AuthRoute';
import AccountRoute from './AccountRoute';

const HomePage = lazy(() => import('../HomePage'));
const NewPostPage = lazy(() => import('../NewPostPage'));
const EditPostPage = lazy(() => import('../EditPostPage'));
const PostDetailPage = lazy(() => import('../PostDetailPage'));
const HashTagPage = lazy(() => import('../HashTagPage'));
const SettingPage = lazy(() => import('../SettingPage'));
const UserPage = lazy(() => import('../UserPage'));
const EditProfilePage = lazy(() => import('../EditProfilePage'));
const ChangePasswordPage = lazy(() => import('../ChangePasswordPage'));
const RegisterAppPage = lazy(() => import('../RegisterAppPage'));
const SignInPage = lazy(() => import('../AccountPage/SignIn'));
const SignUpPage = lazy(() => import('../AccountPage/SignUp'));

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
  const myInfo = cookies.get('myInfo');
  const [isAuth, setIsAuth] = useState(!!myInfo);

  return (
    <AppWrapper>
      <UserProvider value={{ myInfo, isAuth, setIsAuth }}>
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
          <AuthRoute path="/" isAuth={isAuth}>
            <Navigation myInfo={myInfo} />
            <Suspense fallback={<Loading size={50} />}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/new/post" exact component={NewPostPage} />
                <Route
                  path="/edit/:postURL"
                  exact
                  component={props => (
                    <EditPostPage {...props} myInfo={myInfo} />
                  )}
                />
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
              </Switch>
            </Suspense>
          </AuthRoute>
          <AccountRoute path="/account" isAuth={isAuth}>
            <Suspense fallback={<Loading size={50} />}>
              <Route
                path="/account/signin"
                exact
                render={props => (
                  <SignInPage {...props} setIsAuth={setIsAuth} />
                )}
              />
              <Route
                path="/account/signup"
                exact
                render={props => (
                  <SignUpPage {...props} setIsAuth={setIsAuth} />
                )}
              />
            </Suspense>
          </AccountRoute>
        </ThemeProvider>
      </UserProvider>
    </AppWrapper>
  );
}

export default withCookies(App);
