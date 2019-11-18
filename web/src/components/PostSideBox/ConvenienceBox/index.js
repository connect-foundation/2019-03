import React from 'react';

import Wrapper, { IconBox } from './Wrapper';
import Icon from '../../LikeIcon';

function ConvenienceBox() {
  return (
    <Wrapper>
      <IconBox>
        <Icon ratio={5} />
        <Icon ratio={5} />
        <Icon ratio={5} />
      </IconBox>
      <h3>좋아요 23개</h3>
      <small>1일 전</small>
    </Wrapper>
  );
}

export default ConvenienceBox;
