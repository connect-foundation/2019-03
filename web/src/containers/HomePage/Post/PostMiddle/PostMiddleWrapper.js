import React from 'react';
import styled from 'styled-components';

import { useFetch } from '../../../../hooks';
import {
  createPostLike,
  deletePostLike,
} from '../../../../components/LikeIcon/queries';

const PostMiddleWrapperDiv = styled.div``;

const isPostImage = (target, postImage) => target === postImage;
const isLikeIcon = (target, likeIcon) => target === likeIcon;
const callLikeQuery = (isLike, postId, userId, fetchData) => {
  const query = isLike
    ? deletePostLike(postId, userId)
    : createPostLike(postId, userId);
  fetchData(query);
};

const PostMiddleWrapper = props => {
  const { postImage, likeIcon, userId, postId, children } = props;
  const { fetchData } = useFetch();
  const isLike = true;

  const onDoubleClick = ({ target }) => {
    if (!postImage) return;
    if (!isPostImage(target, postImage.current)) {
      return;
    }
    callLikeQuery(isLike, postId, userId, fetchData);
  };

  const onClick = ({ target }) => {
    if (!likeIcon) return;
    if (!isLikeIcon(target, likeIcon.current)) {
      return;
    }
    callLikeQuery(isLike, postId, userId, fetchData);
  };

  return (
    <PostMiddleWrapperDiv onClick={onClick} onDoubleClick={onDoubleClick}>
      {children}
    </PostMiddleWrapperDiv>
  );
};

export default PostMiddleWrapper;
