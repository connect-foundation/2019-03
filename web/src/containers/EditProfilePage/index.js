import React, { useEffect, useState } from 'react';

import InputRow from '../../components/InputRow';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';

function EditProfilePage({ setItem, myInfo }) {
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
  };

  return (
    <Form onSubmit={submitHanlder}>
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
