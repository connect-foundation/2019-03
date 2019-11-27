import React, { useState } from 'react';

import Wrapper, { FlexWrapper, StyledButton, StyledInput } from './Wrapper';
import useMutation from '../../useMutation';

function CommentInput({ style, className, dispatch, post }) {
  const [state, fetchMutation] = useMutation();
  const { loading, data, error } = state;

  const [text, setText] = useState('');
  const myInfo = {
    id: 1,
    username: 'sam',
    profileImage: 'https://i.pravatar.cc/150?img=7',
  };
  const insertCommentQuery = `mutation{
    createComment(
      content:"${text}",
      depth:null,
      PostId:${post.id},
      UserId:${myInfo.id},
    ){
      content
    }
  }`;

  const isEmpty = text === '';
  const onChange = e => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  const submitHandler = () => {
    fetchMutation(insertCommentQuery, () => {
      dispatch({
        type: 'NEWCOMMENT',
        content: text,
        writer: myInfo,
      });
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
