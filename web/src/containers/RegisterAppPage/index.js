import React, { useState, useEffect } from 'react';
import { withCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import urlRegex from 'url-regex';
import Input from '../../components/Input';
import Button from '../../components/Button';
import InputRow from '../../components/InputRow';
import Form from '../../components/Form';
import { Select, Span } from './styles';

const ClientRegistration = ({ setItem, cookies }) => {
  const myInfo = cookies.get('myInfo');

  useEffect(() => {
    setItem('새 어플리케이션 등록');
    return () => setItem(null);
  }, [setItem]);

  const [state, setstate] = useState({
    type: 'web-server-app',
    appName: '',
    redirectionURI: '',
    website: '',
    description: '',
    UserId: myInfo.id,
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
        `${process.env.REACT_APP_OAUTH_SERVER_URL}/client/register`,
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
    return <Redirect to="/setting/show/applications" />;
  }

  return (
    <Form onSubmit={onSubmit}>
      <InputRow
        required
        label="client type"
        rightComponent={
          <Select name="type" onBlur={onBlur}>
            <option value="web-server-app">web-server-app</option>
            <option value="single-page-app">single-page-app</option>
          </Select>
        }
      />

      <InputRow
        required
        label="app name"
        rightComponent={<Input name="appName" onBlur={onBlur} />}
      />

      <InputRow
        required
        label="redirection url"
        rightComponent={
          <section>
            <Input name="redirectionURI" onBlur={onBlur} />
            <Span>반드시 full url을 적어주세요.</Span>
          </section>
        }
      />

      <InputRow
        label="web site"
        rightComponent={<Input name="website" onBlur={onBlur} />}
      />

      <InputRow
        label="description"
        rightComponent={<Input name="description" onBlur={onBlur} />}
      />

      <InputRow rightComponent={<Button type="submit">register</Button>} />
    </Form>
  );
};

export default withCookies(ClientRegistration);
