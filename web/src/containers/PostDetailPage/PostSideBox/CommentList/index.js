import React, { useContext } from 'react';

import { CommentListWrapper, MoreCommentButton } from './styles';
import Comment from './Comment';
import Icon from '../../../../components/Icon';
import PostContext from '../../context';
import useFetch from '../../../../useFetch';

function CommentList() {
  const postId = useContext(PostContext).data.post.id;

  const commentListQuery = `{
    commentList(postId:${postId}, limit:10, offset:0){
      content,
      writer{
        username,
        profileImage
      }
    }
  }`;

  const [state, dispatch, refetch] = useFetch(commentListQuery);
  const { loading, data, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  const comments = data.commentList;

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
