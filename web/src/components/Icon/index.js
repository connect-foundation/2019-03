import React from 'react';
import IconImageSelector from './IconImageSelector';

const iconSelector = {
  favicon: {
    posX: 0,
    posY: -505,
    ratio: 6,
  },
  logo: {
    posX: 0,
    posY: 0,
    ratio: 6,
    style: { width: '170px', height: '39px', marginTop: '18px' },
  },
  newPost: {
    posX: -260,
    posY: -245,
    ratio: 5.5,
    style: { marginTop: '6px' },
  },
  emptyhHeart: {
    posX: -130,
    posY: -246,
    ratio: 6,
  },
  fullHeart: {
    posX: -130,
    posY: -376,
    ratio: 6,
  },
  comment: {
    posX: -520,
    posY: -248,
    ratio: 5,
  },
  logout: {
    posX: 0,
    posY: -248,
    ratio: 5,
    style: { transform: 'rotate(90deg)' },
  },
  clear: {
    posX: -390,
    posY: -625,
    ratio: 10,
    style: { marginTop: '2px', zIndex: '200' },
  },
  search: {
    posX: -260,
    posY: -625,
    ratio: 10,
    style: { marginTop: '2px', position: 'absolute' },
  },
};

const Icon = ({ children, name, ...rest }) => {
  if (!name) return <IconImageSelector {...rest}>{children}</IconImageSelector>;
  const { posX, posY, ratio, style } = iconSelector[name];
  return (
    <IconImageSelector
      posX={posX}
      posY={posY}
      ratio={ratio}
      style={style}
      {...rest}
    >
      {children}
    </IconImageSelector>
  );
};

export default Icon;
