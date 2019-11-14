import React, { useState } from 'react';

import icon from '../../images/icon-1.png';

import Wrapper from './Wrapper';
import StyledSpan from './StyledSpan';

const LikeIcon = () => {
  const [fill, toggleFill] = useState(false);

  const onToggleHandler = () => {
    toggleFill(!fill);
  };

  return (
    <Wrapper>
      <StyledSpan onClick={onToggleHandler} isFill={fill} icon={icon} />
    </Wrapper>
  );
};

export default LikeIcon;
