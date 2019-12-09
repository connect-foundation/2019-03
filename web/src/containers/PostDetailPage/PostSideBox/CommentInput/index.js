import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT, COMMENT_LIST } from '../../queries';
import Loading from '../../../../components/Loading';

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

function CommentInput({ PostId }) {
  const [addComment, { loading }] = useMutation(ADD_COMMENT, {
    update(cache, { data: { createComment } }) {
      const { commentList } = cache.readQuery({
        query: COMMENT_LIST,
        variables: {
          PostId,
          offset: 0,
          limit: 5,
        },
      });
      cache.writeQuery({
        query: COMMENT_LIST,
        variables: {
          PostId,
          offset: 0,
          limit: 5,
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
    if (loading) return;
    e.preventDefault();
    addComment({ variables: { content: text, PostId, UserId: myInfo.id } });
    setText('');
  };

  return (
    <CommentInputWrapper>
      {loading && <Loading size={20} />}
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
