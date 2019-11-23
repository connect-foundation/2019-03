import React from 'react';
import Icon from '../Icon';

import {
  POS_X_OF_HEART,
  TOGGLE_LIKE_ICON,
  useLikeDispatch,
  useLikeState,
} from './Context/LikeContext';

const LikeIcon = ({ ratio, style }) => {
  const state = useLikeState();
  const dispatch = useLikeDispatch();
  const onToggle = () => dispatch({ type: TOGGLE_LIKE_ICON, state });

  return (
    <Icon
      onClick={onToggle}
      ratio={ratio}
      posX={POS_X_OF_HEART}
      posY={state}
      style={style}
    />
  );
};

LikeIcon.defaultProps = {
  ratio: 1,
};

export default LikeIcon;
