import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';

import InputRow from '../../components/InputRow';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Loading from '../../components/Loading';

import { UPDATE_USER } from './queries';

function EditProfilePage({ setItem, myInfo }) {
  const [updateUser, { loading, data, error }] = useMutation(UPDATE_USER);

  const [state, setstate] = useState({
    name: myInfo.name,
    username: myInfo.username,
    email: myInfo.email,
    cellPhone: myInfo.cellPhone,
  });

  const onInputValueChanged = e => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setItem('프로필 편집');
    return () => setItem(null);
  }, [setItem]);

  const submitHanlder = event => {
    event.preventDefault();
    const variables = { id: myInfo.id };
    if (state.name !== myInfo.name) variables.name = state.name;
    if (state.username !== myInfo.username) variables.username = state.username;
    if (state.email !== myInfo.email) variables.email = state.email;
    if (state.cellPhone !== myInfo.cellPhone)
      variables.cellPhone = state.cellPhone;
    updateUser({
      variables,
    });
  };

  if (error) {
    let message = '알 수 없는 에러가 발생했습니다.';
    if (error.message === 'Network error: Failed to fetch')
      message = '서버와 연결이 끊어졌습니다.';
    if (error.message === 'GraphQL error: Validation error')
      message = '사용할 수 없는 사용자 이름입니다. 다른 이름을 사용하세요.';
    alert(message);
  }

  if (data) return <Redirect to="./" />;

  return (
    <Form onSubmit={submitHanlder}>
      {loading && <Loading size={50} />}
      <InputRow
        label="이름"
        rightComponent={
          <Input
            name="name"
            id="pep이름"
            defaultValue={state.name}
            onBlur={onInputValueChanged}
          />
        }
      />
      <InputRow
        label="사용자 이름"
        rightComponent={
          <Input
            name="username"
            id="pep사용자 이름"
            defaultValue={state.username}
            onBlur={onInputValueChanged}
          />
        }
      />
      <InputRow
        label="이메일"
        rightComponent={
          <Input
            name="email"
            id="pep이메일"
            defaultValue={state.email}
            onBlur={onInputValueChanged}
          />
        }
      />
      <InputRow
        label="전화번호"
        rightComponent={
          <Input
            name="cellPhone"
            id="pep전화번호"
            defaultValue={state.cellPhone}
            onBlur={onInputValueChanged}
          />
        }
      />
      <InputRow
        rightComponent={
          <Button btnStyle="primary" type="submit">
            제출
          </Button>
        }
      />
    </Form>
  );
}

export default EditProfilePage;
