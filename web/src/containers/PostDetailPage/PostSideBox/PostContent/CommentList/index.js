import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { CommentListWrapper, MoreCommentButton } from './styles';
import Comment from './Comment';
import Icon from '../../../../../components/Icon';
import { COMMENT_LIST } from '../../../queries';

function CommentList({ PostId }) {
  const { data, error, fetchMore } = useQuery(COMMENT_LIST, {
    variables: {
      PostId,
      offset: 0,
      limit: 5,
    },
    fetchPolicy: 'cache-and-network',
  });

  let comments = [];
  if (error) return <div>에러가 발생했습니다</div>;
  if (data) comments = data.commentList;

  const getMoreComments = () => {
    fetchMore({
      variables: {
        offset: data.commentList.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          commentList: [...prev.commentList, ...fetchMoreResult.commentList],
        };
      },
    });
  };

  return (
    <CommentListWrapper>
      {comments.map(comment => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Comment key={comment.id} {...comment} />
      ))}
      <MoreCommentButton onClick={getMoreComments}>
        <Icon ratio={6} posX={-385} posY={-498} />
      </MoreCommentButton>
    </CommentListWrapper>
  );
}

export default CommentList;
