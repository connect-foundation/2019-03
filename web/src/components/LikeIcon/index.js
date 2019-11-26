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
  useLikerListDispatch,
  DECREASE_LIKE,
  INCREASE_LIKE,
} from '../LikeInfo/Context/LikerListContext';

const LikeIcon = ({ ratio, style }) => {
  const isLike = useLikeState();
  const likeDispatch = useLikeDispatch();
  const likerListDispatch = useLikerListDispatch();

  const onToggle = () => {
    const likerListActionType = isLike ? DECREASE_LIKE : INCREASE_LIKE;
    likerListDispatch({
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
