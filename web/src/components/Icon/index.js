import React from 'react';

import IconImage from './IconImage';

const Icon = ({ ratio, posX, posY, onClick }) => {
  return <IconImage ratio={ratio} posX={posX} posY={posY} onClick={onClick} />;
};

export default Icon;
