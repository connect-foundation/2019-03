import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import urlRegex from 'url-regex';
import {
  Input,
  RegistrationWrapper,
  Title,
  Select,
  Button,
  P,
  Span,
} from './styles';

const ClientRegistration = () => {
  const [state, setstate] = useState({
    type: 'web-server-app',
    appName: '',
    redirectionURI: '',
    website: '',
    description: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();

    if (
      state.type.length === 0 ||
      state.appName.length === 0 ||
      state.redirectionURI.length === 0
    ) {
      alert('필수 요소를 입력해주세요.');
      return;
    }

    if (!urlRegex({ exact: true }).test(state.redirectionURI)) {
      alert('유효한 full url을 입력해주세요.');
      return;
    }

    try {
      const requestResult = await fetch(
        `${process.env.REACT_APP_OAUTH_SERVER_URL}/register`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(state),
        },
      );
      const ResultToJson = await requestResult.json();
      if (ResultToJson.result !== 'fail') {
        setIsSuccess(true);
      } else {
        alert(ResultToJson.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onBlur = e => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  if (isSuccess) {
    return <Redirect to="/developer/main" />;
  }

  return (
    <RegistrationWrapper>
      <form onSubmit={onSubmit}>
        <Title>New app registration</Title>
        <div>
          <P required>client type</P>
          <Select name="type" onBlur={onBlur}>
            <option value="web-server-app">web-server-app</option>
            <option value="single-page-app">single-page-app</option>
          </Select>
        </div>
        <div>
          <P required>app name</P>
          <Input name="appName" onBlur={onBlur} />
        </div>
        <div>
          <P required>redirection url</P>
          <Input name="redirectionURI" onBlur={onBlur} />
          <Span>반드시 full url을 적어주세요.</Span>
        </div>
        <div>
          <P>web site</P>
          <Input name="website" onBlur={onBlur} />
        </div>
        <div>
          <P>description</P>
          <Input name="description" onBlur={onBlur} />
        </div>
        <div>
          <Button type="submit">register</Button>
        </div>
      </form>
    </RegistrationWrapper>
  );
};

export default ClientRegistration;
