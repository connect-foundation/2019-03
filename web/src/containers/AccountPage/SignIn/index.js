import React, { useRef, useState } from 'react';

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

const {
  LOGO_STYLE,
  LINK_STYLE,
  INVALID_USERNAME,
  INVALID_PASSWORD,
} = constants;

function SignInPage({ setIsAuth }) {
  const [validities, setValidities] = useState({
    username: true,
    password: true,
  });
  const signInForm = useRef(null);

  const onSubmit = e => {
    e.preventDefault();
    onSignInSubmitHandler(signInForm, setIsAuth, setValidities);
  };

  return (
    <Background>
      <SignInWrapper>
        <SignInHeader>
          <Icon ratio={4} posX={0} posY={0} style={LOGO_STYLE} />
          <Title>젊은, 낭만을 공유하고 싶으면 로그인하세요!</Title>
        </SignInHeader>
        <SignInForm ref={signInForm} onSubmit={onSubmit}>
          <SignInInput
            type="text"
            name="username"
            limit={30}
            placeholder="사용자이름"
          />
          {validities.username || (
            <ValidationMessage>{INVALID_USERNAME}</ValidationMessage>
          )}
          <SignInInput
            type="password"
            name="password"
            limit={30}
            placeholder="비밀번호"
          />
          {validities.password || (
            <ValidationMessage>{INVALID_PASSWORD}</ValidationMessage>
          )}
          <SignInButton type="submit">로그인</SignInButton>
        </SignInForm>
        <HorizontalLine />
        <SignUpLink style={LINK_STYLE} to="/account/signup" issignin="true">
          회원가입
        </SignUpLink>
      </SignInWrapper>
    </Background>
  );
}

export default SignInPage;
