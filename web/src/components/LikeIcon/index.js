import React, { useState } from 'react';
import Icon from '../Icon';

const POS_X_OF_HEART = -130;
const POS_Y_OF_EMPTY_HEART = -245;
const POS_Y_OF_FILL_HEART = -375;

const LikeIcon = ({ ratio, style }) => {
  const [posY, setPosY] = useState(POS_Y_OF_EMPTY_HEART);

  const onToggle = () => {
    setPosY(
      posY === POS_Y_OF_EMPTY_HEART
        ? POS_Y_OF_FILL_HEART
        : POS_Y_OF_EMPTY_HEART,
    );
  };

  return (
    <Icon
      onClick={onToggle}
      ratio={ratio}
      posX={POS_X_OF_HEART}
      posY={posY}
      style={style}
    />
  );
};

LikeIcon.defaultProps = {
  ratio: 1,
};

export default LikeIcon;
