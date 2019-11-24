import React from 'react';
import Icon from '../Icon';

import {
  POS_X_OF_HEART,
  POS_Y_OF_FILL_HEART,
  POS_Y_OF_EMPTY_HEART,
  TOGGLE_LIKE_ICON,
  useLikeDispatch,
  useLikeState,
} from './Context/LikeContext';
import {
  useLikerInfoDispatch,
  DECREASE_LIKE,
  INCREASE_LIKE,
} from '../LikeInfo/Context/LikerInfoContext';

const LikeIcon = ({ ratio, style }) => {
  const isLike = useLikeState();
  const likeDispatch = useLikeDispatch();
  const likerInfoDispatch = useLikerInfoDispatch();

  const onToggle = () => {
    const likerListActionType = isLike ? DECREASE_LIKE : INCREASE_LIKE;
    likerInfoDispatch({
      type: likerListActionType,
      liker: { username: 'test1', name: 'aaaa' },
    });
    likeDispatch({ type: TOGGLE_LIKE_ICON });
  };

  return (
    <Icon
      onClick={onToggle}
      ratio={ratio}
      posX={POS_X_OF_HEART}
      posY={isLike ? POS_Y_OF_FILL_HEART : POS_Y_OF_EMPTY_HEART}
      style={style}
    />
  );
};

LikeIcon.defaultProps = {
  ratio: 1,
};

export default LikeIcon;
