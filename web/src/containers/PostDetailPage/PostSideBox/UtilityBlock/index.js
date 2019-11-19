import React from 'react';

import { UtilityBlockWrapper, IconBox } from './styles';
import Icon from '../../../../components/LikeIcon';

function UtilityBlock() {
  return (
    <UtilityBlockWrapper>
      <IconBox>
        <Icon ratio={5} />
        <Icon ratio={5} />
        <Icon ratio={5} />
      </IconBox>
      <h3>좋아요 23개</h3>
      <small>1일 전</small>
    </UtilityBlockWrapper>
  );
}

export default UtilityBlock;
