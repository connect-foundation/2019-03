import React from 'react';
import styled from 'styled-components';
import {
  useLikeDispatch,
  useLikeState,
  TOGGLE_LIKE_ICON,
} from '../../../components/LikeIcon/Context/LikeContext';

const POST_IMAGE_LENGTH = 615;

const PostImageDiv = styled.div`
  background-image: url(${({ imgSrc }) => imgSrc});
  background-size: cover;
  background-repeat: no-repeat;

  width: ${POST_IMAGE_LENGTH}px;
  height: ${POST_IMAGE_LENGTH}px;

  margin-bottom: 4px;

  cursor: pointer;
`;

const PostImage = ({ imgSrc }) => {
  const likeState = useLikeState();
  const likeDispatch = useLikeDispatch();
  const onToggle = () =>
    likeDispatch({ type: TOGGLE_LIKE_ICON, state: likeState });

  return <PostImageDiv imgSrc={imgSrc} onDoubleClick={onToggle} />;
};

export default PostImage;
