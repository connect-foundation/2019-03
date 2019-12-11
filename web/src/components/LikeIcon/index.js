import React, { forwardRef } from 'react';
import Icon from '../Icon';

import {
  TOGGLE_LIKE_ICON,
  useLikeDispatch,
  useLikeState,
} from './Context/LikeContext';
import {
  useLikerInfoDispatch,
  DECREASE_LIKE,
  INCREASE_LIKE,
} from '../LikeInfo/Context/LikerInfoContext';

const LikeIcon = forwardRef(({ myInfo, ratio, style }, ref) => {
  const isLike = useLikeState();
  const likeDispatch = useLikeDispatch();
  const likerInfoDispatch = useLikerInfoDispatch();

  const onToggle = () => {
    likeDispatch({ type: TOGGLE_LIKE_ICON });

    if (!likerInfoDispatch) return;
    const likerListActionType = isLike ? DECREASE_LIKE : INCREASE_LIKE;
    likerInfoDispatch({ type: likerListActionType, myInfo });
  };

  return (
    <Icon
      onClick={onToggle}
      name={isLike ? 'fullHeart' : 'emptyhHeart'}
      ratio={ratio}
      style={style}
      ref={ref}
    />
  );
});

LikeIcon.defaultProps = {
  ratio: 1,
};

export default LikeIcon;
