import React from 'react';

import Icon from '../Icon';

const SHARE_POS_X = 0;
const SHARE_POS_Y = -248;

const ShareIcon = ({ ratio, onClick }) => {
  return (
    <Icon
      ratio={ratio}
      posX={SHARE_POS_X}
      posY={SHARE_POS_Y}
      onClick={onClick}
    />
  );
};

ShareIcon.defaultProps = {
  ratio: 5,
};

export default ShareIcon;
