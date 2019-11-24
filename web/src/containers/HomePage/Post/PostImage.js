import React from 'react';
import styled from 'styled-components';
import {
  useLikeDispatch,
  TOGGLE_LIKE_ICON,
  useLikeState,
} from '../../../components/LikeIcon/Context/LikeContext';
import {
  useLikerListDispatch,
  DECREASE_LIKE,
  INCREASE_LIKE,
} from '../../../components/LikeInfo/Context/LikerListContext';

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
  const likerListDispatch = useLikerListDispatch();
  const likeDispatch = useLikeDispatch();
  const isLike = useLikeState();
  const onToggle = () => {
    const likerListActionType = isLike ? DECREASE_LIKE : INCREASE_LIKE;
    likerListDispatch({
      type: likerListActionType,
      liker: { username: 'test1', name: 'aaaa' },
    });
    likeDispatch({ type: TOGGLE_LIKE_ICON });
  };

  return <PostImageDiv imgSrc={imgSrc} onDoubleClick={onToggle} />;
};

export default PostImage;
