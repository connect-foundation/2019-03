import React, { useEffect, useState } from 'react';

import InputRow from '../../components/InputRow';
import { StyledForm } from './styles';

function EditProfilePage({ setItem, myInfo }) {
  const [username, setUsername] = useState(myInfo.username);
  const [name, setName] = useState(myInfo.name);
  const [email, setEmail] = useState(myInfo.email);
  const [cellPhone, setCellPhone] = useState(myInfo.cellPhone);

  useEffect(() => {
    setItem('프로필 편집');
    return () => setItem(null);
  }, [setItem]);

  const submitHanlder = event => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={submitHanlder}>
      <InputRow label="이름" text={name} setText={setName} rowStyle="input" />
      <InputRow
        label="사용자 이름"
        text={username}
        setText={setUsername}
        rowStyle="input"
      />
      <InputRow
        label="이메일"
        text={email}
        setText={setEmail}
        rowStyle="input"
      />
      <InputRow
        label="전화번호"
        text={cellPhone}
        setText={setCellPhone}
        rowStyle="input"
      />
      <InputRow text="제출" rowStyle="button" />
    </StyledForm>
  );
}

export default EditProfilePage;
