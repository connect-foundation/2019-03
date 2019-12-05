import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { FOLLOWING_POST_LIST, CREATE_COMMENT } from '../../queries';

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
  const [addComment] = useMutation(CREATE_COMMENT, {
    update(cache, { data: { createComment } }) {
      const { followingPostList } = cache.readQuery({
        query: FOLLOWING_POST_LIST,
        variables: {
          myId: myInfo.id,
          offset: 0,
          limit: 5,
        },
      });
      const changedFollowingPostList = [...followingPostList];

      changedFollowingPostList
        .find(post => +post.id === PostId)
        .commentList.push(createComment);
      cache.writeQuery({
        query: FOLLOWING_POST_LIST,
        variables: {
          myId: myInfo.id,
          offset: 0,
          limit: 5,
        },
        data: { followingPostList: changedFollowingPostList },
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
