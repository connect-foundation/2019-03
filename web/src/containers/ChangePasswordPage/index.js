import React, { useEffect, useState } from 'react';

import InputRow from '../../components/InputRow';
import { StyledForm } from './styles';

function ChangePasswordPage({ setItem, myInfo }) {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');

  useEffect(() => {
    setItem('비밀번호 변경');
    return () => setItem(null);
  }, [setItem]);

  const submitHanlder = event => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={submitHanlder}>
      <InputRow
        label="이전 비밀번호"
        text={password}
        setText={setPassword}
        rowStyle="input"
        inputType="password"
      />
      <InputRow
        label="새 비밀번호"
        text={newPassword}
        setText={setNewPassword}
        rowStyle="input"
        inputType="password"
      />
      <InputRow
        label="새 비밀번호 확인"
        text={newPasswordCheck}
        setText={setNewPasswordCheck}
        rowStyle="input"
        inputType="password"
      />
      <InputRow text="비밀 번호 변경" rowStyle="button" />
    </StyledForm>
  );
}

export default ChangePasswordPage;
