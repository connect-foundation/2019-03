import React, { useContext } from 'react';

import { CommentListWrapper, MoreCommentButton } from './styles';
import Comment from './Comment';
import Icon from '../../../../../components/Icon';
import CommentContext from '../../context';

function CommentList() {
  const { data, error } = useContext(CommentContext).state;
  const { requestMoreComments } = useContext(CommentContext);
  let comments = [];
  if (error) return <div>에러가 발생했습니다</div>;
  if (data) comments = data.commentList;
  return (
    <CommentListWrapper>
      {comments.map(comment => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Comment key={comment.id} {...comment} />
      ))}
      <MoreCommentButton onClick={requestMoreComments}>
        <Icon ratio={6} posX={-385} posY={-498} />
      </MoreCommentButton>
    </CommentListWrapper>
  );
}

export default CommentList;
