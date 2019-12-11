import React, { useEffect, useState } from 'react';

import InputRow from '../../components/InputRow';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';

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
    <Form onSubmit={submitHanlder}>
      <InputRow
        label="이전 비밀번호"
        rightComponent={(
          <Input
            id="pep이전 비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        )}
      />

      <InputRow
        label="새 비밀번호"
        rightComponent={(
          <Input
            id="pep새 비밀번호"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            type="password"
          />
        )}
      />

      <InputRow
        label="새 비밀번호 확인"
        rightComponent={(
          <Input
            id="pep새 비밀번호 확인"
            value={newPasswordCheck}
            onChange={e => setNewPasswordCheck(e.target.value)}
            type="password"
          />
        )}
      />

      <InputRow
        rightComponent={<Button type="submit">비밀 번호 변경</Button>}
      />
    </Form>
  );
}

export default ChangePasswordPage;
