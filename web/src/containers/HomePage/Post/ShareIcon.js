import React from 'react';

import Icon from '../../../components/Icon';

const SHARE_POS_X = 0;
const SHARE_POS_Y = -248;

const ShareIcon = ({ ratio }) => {
  return <Icon ratio={ratio} posX={SHARE_POS_X} posY={SHARE_POS_Y} />;
};

ShareIcon.defaultProps = {
  ratio: 5,
};

export default ShareIcon;
