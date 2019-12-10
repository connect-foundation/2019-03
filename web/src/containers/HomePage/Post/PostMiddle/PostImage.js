import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
  useLikeDispatch,
  TOGGLE_LIKE_ICON,
  useLikeState,
} from '../../../../components/LikeIcon/Context/LikeContext';
import {
  useLikerInfoDispatch,
  DECREASE_LIKE,
  INCREASE_LIKE,
} from '../../../../components/LikeInfo/Context/LikerInfoContext';

const POST_IMAGE_LENGTH = 615;

const PostImageDiv = styled.div`
  background-image: url(${({ imageURL }) => imageURL});
  background-size: cover;
  background-repeat: no-repeat;

  border-bottom: 1px solid ${({ theme }) => theme.palette.border};

  width: ${POST_IMAGE_LENGTH}px;
  height: ${POST_IMAGE_LENGTH}px;

  margin-bottom: 4px;

  cursor: pointer;
`;

const PostImage = forwardRef(({ imageURL, myInfo }, ref) => {
  const likerInfoDispatch = useLikerInfoDispatch();
  const likeDispatch = useLikeDispatch();
  const isLike = useLikeState();

  const onToggle = () => {
    likeDispatch({ type: TOGGLE_LIKE_ICON });

    const likerListActionType = isLike ? DECREASE_LIKE : INCREASE_LIKE;
    likerInfoDispatch({ type: likerListActionType, myInfo });
  };

  return (
    <PostImageDiv ref={ref} imageURL={imageURL} onDoubleClick={onToggle} />
  );
});

export default PostImage;
