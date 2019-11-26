import React, { useState } from 'react';

import Wrapper, { FlexWrapper, StyledButton, StyledInput } from './Wrapper';

function CommentInput({ style, className }) {
  const [text, setText] = useState('');
  const isEmpty = text === '';
  const onChange = e => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <Wrapper style={style} className={className}>
      <FlexWrapper>
        <StyledInput
          placeholder="댓글달기..."
          onChange={onChange}
          value={text}
        />
        <StyledButton onClick={onReset} disabled={isEmpty}>
          게시
        </StyledButton>
      </FlexWrapper>
    </Wrapper>
  );
}

export default CommentInput;
