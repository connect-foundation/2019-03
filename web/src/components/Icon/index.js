import React from 'react';

import IconSpan from './IconSpan';

const Icon = ({ ratio, posX, posY, onClick }) => {
  return <IconSpan ratio={ratio} posX={posX} posY={posY} onClick={onClick} />;
};

export default Icon;
