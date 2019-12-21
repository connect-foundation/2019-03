import React, { useRef, useReducer } from 'react';
import { withCookies } from 'react-cookie';
import { useApolloClient } from '@apollo/react-hooks';

import {
  SignWrapper as SignInWrapper,
  SignHeader as SignInHeader,
  SignButton as SignInButton,
  SignForm as SignInForm,
  SignInput as SignInInput,
  HorizontalLine,
  SignLink as SignUpLink,
  Background,
  Title,
  ValidationMessage,
} from '../styles';
import Icon from '../../../components/Icon';
import constants from '../constants';
import { onSignInSubmitHandler } from '../lib';
import reducer, {
  INIT_STATE,
  SET_AUTH_ERROR,
  SET_SERVER_ERROR,
} from './reducer';
import { RESET_VALIDATION_MESSAGE } from '../SignUp/reducer';

const {
  LOGO_STYLE,
  LINK_STYLE,
  INVALID_USERNAME,
  INVALID_PASSWORD,
  UNAUTHORIZED,
  SERVER_ERROR,
} = constants;

function SignInPage({ cookies }) {
  const client = useApolloClient();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const signInForm = useRef(null);

  const onSubmit = async e => {
    e.preventDefault();
    dispatch({ type: RESET_VALIDATION_MESSAGE });
    try {
      await onSignInSubmitHandler(signInForm, dispatch);
      const myInfo = cookies.get('myInfo');
      client.writeData({
        data: {
          isLoggedIn: !!myInfo,
        },
      });
    } catch (error) {
      if (error.message === 'unauthorized') {
        dispatch({ type: SET_AUTH_ERROR });
        return;
      }
      dispatch({ type: SET_SERVER_ERROR });
    }
  };

  return (
    <Background>
      <SignInWrapper>
        <SignInHeader>
          <Icon ratio={4} name="logo" style={LOGO_STYLE} />
          <Title>젊음, 낭만을 공유하고 싶으면 로그인하세요!</Title>
        </SignInHeader>
        <SignInForm ref={signInForm} onSubmit={onSubmit}>
          <SignInInput
            type="text"
            name="username"
            limit={30}
            placeholder="사용자이름"
          />
          {state.validities.username || (
            <ValidationMessage>{INVALID_USERNAME}</ValidationMessage>
          )}
          <SignInInput
            type="password"
            name="password"
            limit={30}
            placeholder="비밀번호"
          />
          {state.validities.password || (
            <ValidationMessage>{INVALID_PASSWORD}</ValidationMessage>
          )}
          <SignInButton type="submit">로그인</SignInButton>
        </SignInForm>
        {state.isAuth || <ValidationMessage>{UNAUTHORIZED}</ValidationMessage>}
        {state.isServerError && (
          <ValidationMessage>{SERVER_ERROR}</ValidationMessage>
        )}
        <HorizontalLine />
        <SignUpLink style={LINK_STYLE} to="/account/signup" issignin="true">
          회원가입
        </SignUpLink>
      </SignInWrapper>
    </Background>
  );
}

export default withCookies(SignInPage);
