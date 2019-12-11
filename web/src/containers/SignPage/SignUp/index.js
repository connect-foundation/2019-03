import React from 'react';

import {
  SignWrapper as SignUpWrapper,
  SignHeader as SignUpHeader,
  SignButton as SignUpButton,
  SignForm as SignUpForm,
  SignInput as SignUpInput,
  HorizontalLine,
  SignLink as SignInLink,
  Background,
} from '../styles';
import Icon from '../../../components/Icon';
import Title from '../Title';

const iconStyle = {
  width: '250px',
  minHeight: '45px',
};

const linkStyle = {
  color: '#3897f0',
  fontWeight: '600',
  fontSize: '14px',
};

function SignUpPage() {
  return (
    <Background>
      <SignUpWrapper>
        <SignUpHeader>
          <Icon ratio={4} posX={0} posY={0} style={iconStyle} />
          <Title>젊은, 낭만을 공유하고 싶으면 가입하세요!</Title>
        </SignUpHeader>
        <SignUpForm>
          <SignUpInput type="text" placeholder="사용자이름" />
          <SignUpInput type="text" placeholder="이름" />
          <SignUpInput type="password" placeholder="비밀번호" />
          <SignUpInput type="text" placeholder="이메일주소" />
          <SignUpInput type="text" placeholder="휴대폰번호" />
          <SignUpButton type="button">회원가입</SignUpButton>
        </SignUpForm>
        <HorizontalLine />
        <SignInLink style={linkStyle} to="/account/signin">
          로그인
        </SignInLink>
      </SignUpWrapper>
    </Background>
  );
}

export default SignUpPage;
