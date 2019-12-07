import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import {
  EditBoxWrapper,
  StyledTextBox,
  ButtonGroup,
  StyledButton,
} from './styles';

function EditBox({ post }) {
  const [redirect, setRedirect] = useState(false);
  const [text, setText] = useState(post.content);
  const onTextChange = e => {
    setText(e.target.value);
  };

  const cancelEdit = () => setRedirect(true);
  if (redirect) return <Redirect to="/" />;
  return (
    <EditBoxWrapper>
      <StyledTextBox contentEditable="true" onChange={onTextChange}>
        {text}
      </StyledTextBox>
      <ButtonGroup>
        <StyledButton blue>수정</StyledButton>
        <StyledButton onClick={cancelEdit}>취소</StyledButton>
      </ButtonGroup>
    </EditBoxWrapper>
  );
}

export default EditBox;
