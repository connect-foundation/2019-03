import React, { useState } from 'react';

import Wrapper, { FlexWrapper, StyledButton, StyledInput } from './Wrapper';

function CommentInput() {
  const [text, setText] = useState('');
  const onChange = e => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <Wrapper>
      <FlexWrapper>
        <StyledInput
          placeholder="댓글달기..."
          onChange={onChange}
          value={text}
        />
        <StyledButton onClick={onReset}>게시</StyledButton>
      </FlexWrapper>
    </Wrapper>
  );
}

export default CommentInput;
