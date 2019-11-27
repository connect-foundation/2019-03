import React, { useContext } from 'react';

import { CommentListWrapper, MoreCommentButton } from './styles';
import Comment from './Comment';
import Icon from '../../../../components/Icon';
import CommentContext from '../context';

function CommentList() {
  const { loading, data, error } = useContext(CommentContext).state;
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  const comments = data.commentList;
  return (
    <CommentListWrapper>
      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
      <MoreCommentButton>
        <Icon ratio={6} posX={-385} posY={-498} />
      </MoreCommentButton>
    </CommentListWrapper>
  );
}

export default CommentList;
