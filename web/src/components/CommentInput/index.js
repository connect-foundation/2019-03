import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import {
  StyledForm,
  StyledButton,
  StyledInput,
  CommentInputWrapper,
} from './styles';

const myInfo = {
  id: 1,
  username: '_so_02',
  name: '정소영',
  profileImage: 'https://i.pravatar.cc/150?img=9',
};

function CommentInput({ PostId, ADD_COMMENT, COMMENT_LIST, variables }) {
  const [addComment] = useMutation(ADD_COMMENT, {
    update(cache, { data: { createComment } }) {
      const { commentList } = cache.readQuery({
        query: COMMENT_LIST,
        variables: {
          PostId,
          ...variables,
        },
      });
      cache.writeQuery({
        query: COMMENT_LIST,
        variables: {
          PostId,
          ...variables,
        },
        data: { commentList: [createComment].concat(commentList) },
      });
    },
  });

  const [text, setText] = useState('');

  const isEmpty = text === '';

  const onChange = e => {
    setText(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    addComment({ variables: { content: text, PostId, UserId: myInfo.id } });
    setText('');
  };

  return (
    <CommentInputWrapper>
      <StyledForm onSubmit={submitHandler}>
        <StyledInput
          placeholder="댓글달기..."
          onChange={onChange}
          value={text}
        />
        <StyledButton type="submit" disabled={isEmpty}>
          게시
        </StyledButton>
      </StyledForm>
    </CommentInputWrapper>
  );
}

export default CommentInput;
