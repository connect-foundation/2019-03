import React, { useRef, useReducer } from 'react';
import { withCookies } from 'react-cookie';
import { useApolloClient } from '@apollo/react-hooks';

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
import reducer, {
  INIT_STATE,
  RESET_VALIDATION_MESSAGE,
  SET_DUPLICATED_ERROR,
  SET_SERVER_ERROR,
} from './reducer';

const {
  LOGO_STYLE,
  LINK_STYLE,
  INVALID_USERNAME,
  INVALID_PASSWORD,
  INVALID_PASSWORD_CHECK,
  INVALID_NAME,
  INVALID_EMAIL,
  INVALID_CELLPHONE,
  SERVER_ERROR,
} = constants;

function SignUpPage({ cookies }) {
  const client = useApolloClient();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const signUpForm = useRef(null);

  const onSubmit = async e => {
    e.preventDefault();
    dispatch({ type: RESET_VALIDATION_MESSAGE });
    try {
      await onSignUpSubmitHandler(signUpForm, dispatch);
      const myInfo = cookies.get('myInfo');
      client.writeData({
        data: {
          isLoggedIn: !!myInfo,
        },
      });
    } catch (error) {
      if (error.message === 'Duplicated username') {
        dispatch({ type: SET_DUPLICATED_ERROR });
        return;
      }
      dispatch({ type: SET_SERVER_ERROR });
    }
  };

  return (
    <Background>
      <SignUpWrapper>
        <SignUpHeader>
          <Icon ratio={4} name="logo" style={LOGO_STYLE} />
          <Title>젊음, 낭만을 공유하고 싶으면 가입하세요!</Title>
        </SignUpHeader>
        <SignUpForm ref={signUpForm} onSubmit={onSubmit}>
          <SignUpInput
            type="text"
            name="username"
            limit={30}
            placeholder="사용자이름"
          />
          {state.validities.username || (
            <ValidationMessage>{INVALID_USERNAME}</ValidationMessage>
          )}
          {state.isDuplicated && (
            <ValidationMessage>중복된 아이디 입니다.</ValidationMessage>
          )}
          <SignUpInput type="text" name="name" limit={30} placeholder="이름" />
          {state.validities.name || (
            <ValidationMessage>{INVALID_NAME}</ValidationMessage>
          )}
          <SignUpInput
            type="password"
            name="password"
            limit={30}
            placeholder="비밀번호"
          />
          {state.validities.password || (
            <ValidationMessage>{INVALID_PASSWORD}</ValidationMessage>
          )}
          <SignUpInput
            type="password"
            name="passwordcheck"
            limit={30}
            placeholder="비밀번호 확인"
          />
          {state.validities.passwordcheck || (
            <ValidationMessage>{INVALID_PASSWORD_CHECK}</ValidationMessage>
          )}
          <SignUpInput
            type="text"
            name="email"
            limit={45}
            placeholder="이메일주소"
          />
          {state.validities.email || (
            <ValidationMessage>{INVALID_EMAIL}</ValidationMessage>
          )}
          <SignUpInput
            type="text"
            name="cellPhone"
            limit={11}
            placeholder="휴대폰번호(하이픈 - 제외)"
          />
          {state.validities.cellPhone || (
            <ValidationMessage>{INVALID_CELLPHONE}</ValidationMessage>
          )}
          <SignUpButton type="submit">회원가입</SignUpButton>
        </SignUpForm>
        {state.isServerError && (
          <ValidationMessage>{SERVER_ERROR}</ValidationMessage>
        )}
        <HorizontalLine />
        <SignInLink style={LINK_STYLE} to="/account/signin">
          로그인
        </SignInLink>
      </SignUpWrapper>
    </Background>
  );
}

export default withCookies(SignUpPage);
