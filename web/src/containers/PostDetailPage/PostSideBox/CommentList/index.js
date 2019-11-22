import React from 'react';

import { CommentListWrapper, MoreCommentButton } from './styles';
import Comment from './Comment';
import Icon from '../../../../components/Icon';

function CommentList() {
  const comments = [
    {
      user: {
        username: 'jack',
        profileURL: null,
      },
      content:
        ' 11월 고고쉼 후원판매☃️ 여러분! 오늘은 이캠 하나스퀘어의 피아노 라운지 옆에서 고고쉼 후원판매를 진행하고 있으니 많이많이 가주세요!!',
      updatedAt: null,
      likers: 32,
      commentId: 111,
    },
    {
      user: {
        username: 'sam',
        profileURL: null,
      },
      content:
        ' 11월 고고쉼 후원판매☃️ 여러분! 오늘은 이캠 하나스퀘어의 피아노 라운지 옆에서 고고쉼 후원판매를 진행하고 있으니 많이많이 가주세요!!',
      updatedAt: null,
      likers: 32,
      commentId: 111,
    },
    {
      user: {
        username: 'sam',
        profileURL: null,
      },
      content:
        ' 11월 고고쉼 후원판매☃️ 여러분! 오늘은 이캠 하나스퀘어의 피아노 라운지 옆에서 고고쉼 후원판매를 진행하고 있으니 많이많이 가주세요!!',
      updatedAt: null,
      likers: 32,
      commentId: 111,
    },
    {
      user: {
        username: 'pet',
        profileURL: null,
      },
      content:
        ' 11월 고고쉼 후원판매☃️ 여러분! 오늘은 이캠 하나스퀘어의 피아노 라운지 옆에서 고고쉼 후원판매를 진행하고 있으니 많이많이 가주세요!!',
      updatedAt: null,
      likers: 32,
      commentId: 111,
    },
  ];

  return (
    <CommentListWrapper>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
      <MoreCommentButton>
        <Icon ratio={6} posX={-385} posY={-498} />
      </MoreCommentButton>
    </CommentListWrapper>
  );
}

export default CommentList;
