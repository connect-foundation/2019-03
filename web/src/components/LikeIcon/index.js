import React, { useState } from 'react';

import icon from '../../images/icon-1.png';

import LikeIconSpan from './LikeIconSpan';

const LikeIcon = ({ ratio }) => {
  const [isFill, onToggle] = useState(false);

  const onToggleHandler = () => {
    onToggle(!isFill);
  };

  return (
    <>
      <LikeIconSpan
        onClick={onToggleHandler}
        isFill={isFill}
        icon={icon}
        ratio={ratio}
      />
    </>
  );
};

export default LikeIcon;
