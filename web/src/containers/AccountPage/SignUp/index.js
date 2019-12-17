import React, { useRef, useState } from 'react';

import {
  SignWrapper as SignUpWrapper,
  SignHeader as SignUpHeader,
  SignButton as SignUpButton,
  SignForm as SignUpForm,
  SignInput as SignUpInput,
  HorizontalLine,
  SignLink as SignInLink,
  Background,
  Title,
  ValidationMessage,
} from '../styles';
import Icon from '../../../components/Icon';
import constants from '../constants';
import { onSignUpSubmitHandler } from '../lib';

const {
  LOGO_STYLE,
  LINK_STYLE,
  INVALID_USERNAME,
  INVALID_PASSWORD,
  INVALID_NAME,
  INVALID_EMAIL,
  INVALID_CELLPHONE,
} = constants;

function SignUpPage({ setIsAuth }) {
  const [isDuplicated, setIsDuplicated] = useState(false);
  const [validities, setValidities] = useState({
    username: true,
    password: true,
    name: true,
    email: true,
    cellPhone: true,
  });
  const signUpForm = useRef(null);

  const onSubmit = e => {
    e.preventDefault();
    onSignUpSubmitHandler(
      signUpForm,
      setIsAuth,
      setValidities,
      setIsDuplicated,
    );
  };

  return (
    <Background>
      <SignUpWrapper>
        <SignUpHeader>
          <Icon ratio={4} name="logo" style={LOGO_STYLE} />
          <Title>젊은, 낭만을 공유하고 싶으면 가입하세요!</Title>
        </SignUpHeader>
        <SignUpForm ref={signUpForm} onSubmit={onSubmit}>
          <SignUpInput
            type="text"
            name="username"
            limit={30}
            placeholder="사용자이름"
          />
          {validities.username || (
            <ValidationMessage>{INVALID_USERNAME}</ValidationMessage>
          )}
          {isDuplicated && (
            <ValidationMessage>중복된 아이디 입니다.</ValidationMessage>
          )}
          <SignUpInput type="text" name="name" limit={30} placeholder="이름" />
          {validities.name || (
            <ValidationMessage>{INVALID_NAME}</ValidationMessage>
          )}
          <SignUpInput
            type="password"
            name="password"
            limit={30}
            placeholder="비밀번호"
          />
          {validities.password || (
            <ValidationMessage>{INVALID_PASSWORD}</ValidationMessage>
          )}
          <SignUpInput
            type="text"
            name="email"
            limit={45}
            placeholder="이메일주소"
          />
          {validities.email || (
            <ValidationMessage>{INVALID_EMAIL}</ValidationMessage>
          )}
          <SignUpInput
            type="text"
            name="cellPhone"
            limit={11}
            placeholder="휴대폰번호(하이픈 - 제외)"
          />
          {validities.cellPhone || (
            <ValidationMessage>{INVALID_CELLPHONE}</ValidationMessage>
          )}
          <SignUpButton type="submit">회원가입</SignUpButton>
        </SignUpForm>
        <HorizontalLine />
        <SignInLink style={LINK_STYLE} to="/account/signin">
          로그인
        </SignInLink>
      </SignUpWrapper>
    </Background>
  );
}

export default SignUpPage;
