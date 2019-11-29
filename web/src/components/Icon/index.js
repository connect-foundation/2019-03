import React, { forwardRef } from 'react';

import IconImage from './IconImage';

const Icon = forwardRef(
  ({ ratio, posX, posY, onClick, className, style }, ref) => {
    return (
      <IconImage
        ratio={ratio}
        posX={posX}
        posY={posY}
        onClick={onClick}
        className={className}
        style={style}
        ref={ref}
      />
    );
  },
);

export default Icon;
