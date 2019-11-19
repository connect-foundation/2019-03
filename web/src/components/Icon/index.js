import React from 'react';

import IconImage from './IconImage';

const Icon = ({ ratio, posX, posY, onClick, className, style }) => {
  return (
    <IconImage
      ratio={ratio}
      posX={posX}
      posY={posY}
      onClick={onClick}
      className={className}
      style={style}
    />
  );
};

export default Icon;
