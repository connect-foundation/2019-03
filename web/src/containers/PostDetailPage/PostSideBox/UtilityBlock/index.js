import React from 'react';

import {
  UtilityBlockWrapper,
  IconList,
  IconWrapper,
  LikerCount,
  TimePassed,
} from './styles';
import Icon from '../../../../components/Icon';
import LikeIcon from '../../../../components/LikeIcon';

function UtilityBlock() {
  return (
    <UtilityBlockWrapper>
      <IconList>
        <IconWrapper>
          <LikeIcon ratio={5} />
        </IconWrapper>
        <IconWrapper>
          <Icon ratio={5} posX={-520} posY={-245} />
        </IconWrapper>
        <IconWrapper>
          <Icon ratio={5} posX={0} posY={-250} />
        </IconWrapper>
      </IconList>
      <LikerCount>좋아요 23개</LikerCount>
      <TimePassed>1일 전</TimePassed>
    </UtilityBlockWrapper>
  );
}

export default UtilityBlock;
