import React from 'react';
import styled from 'styled-components';
import {
  useLikeDispatch,
  TOGGLE_LIKE_ICON,
  useLikeState,
} from '../../../components/LikeIcon/Context/LikeContext';
import {
  useLikerInfoDispatch,
  DECREASE_LIKE,
  INCREASE_LIKE,
} from '../../../components/LikeInfo/Context/LikerInfoContext';

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

const PostImage = ({ imageURL, myInfo }) => {
  const likerInfoDispatch = useLikerInfoDispatch();
  const likeDispatch = useLikeDispatch();
  const isLike = useLikeState();
  const onToggle = () => {
    const likerListActionType = isLike ? DECREASE_LIKE : INCREASE_LIKE;
    likerInfoDispatch({
      type: likerListActionType,
    });
    likeDispatch({ type: TOGGLE_LIKE_ICON });
  };

  return <PostImageDiv imageURL={imageURL} onDoubleClick={onToggle} />;
};

export default PostImage;
