import React, { useState } from 'react';

import Wrapper, { FlexWrapper, StyledButton, StyledInput } from './Wrapper';
import useFetch from '../../useFetch';
import reducer from './reducer';

function CommentInput({ style, className, dispatch, post }) {
  const insertCommentQuery = `{

  }`;
  const [state, refetch] = useFetch(insertCommentQuery, reducer, [], true);

  const myInfo = {
    username: 'sam',
    profileImage: 'https://i.pravatar.cc/150?img=7',
  };
  const [text, setText] = useState('');
  const isEmpty = text === '';
  const onChange = e => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  const submitHandler = () => {
    dispatch({
      type: 'NEWCOMMENT',
      content: text,
      writer: myInfo,
    });
    onReset();
  };

  return (
    <Wrapper style={style} className={className}>
      <FlexWrapper>
        <StyledInput
          placeholder="댓글달기..."
          onChange={onChange}
          value={text}
        />
        <StyledButton onClick={submitHandler} disabled={isEmpty}>
          게시
        </StyledButton>
      </FlexWrapper>
    </Wrapper>
  );
}

export default CommentInput;
