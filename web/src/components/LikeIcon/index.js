import React, { useState } from 'react';

import icon from '../../images/icon-1.png';

import LikeIconSpan from './LikeIconSpan';

const LikeIcon = ({ ratio }) => {
  const [fill, toggleFill] = useState(false);

  const onToggleHandler = () => {
    toggleFill(!fill);
  };

  return (
    <>
      <LikeIconSpan
        onClick={onToggleHandler}
        isFill={fill}
        icon={icon}
        ratio={ratio}
      />
    </>
  );
};

export default LikeIcon;
