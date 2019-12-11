import React from 'react';

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
} from '../styles';
import Icon from '../../../components/Icon';

const iconStyle = {
  width: '250px',
  minHeight: '45px',
};

const linkStyle = {
  color: '#3897f0',
  fontWeight: '600',
  fontSize: '14px',
};

function SignInPage() {
  return (
    <Background>
      <SignInWrapper>
        <SignInHeader>
          <Icon ratio={4} posX={0} posY={0} style={iconStyle} />
          <Title>젊은, 낭만을 공유하고 싶으면 로그인하세요!</Title>
        </SignInHeader>
        <SignInForm>
          <SignInInput type="text" placeholder="사용자이름" />
          <SignInInput type="password" placeholder="비밀번호" />
          <SignInButton type="button">로그인</SignInButton>
        </SignInForm>
        <HorizontalLine />
        <SignUpLink style={linkStyle} to="/account/signup" issignin="true">
          회원가입
        </SignUpLink>
      </SignInWrapper>
    </Background>
  );
}

export default SignInPage;
