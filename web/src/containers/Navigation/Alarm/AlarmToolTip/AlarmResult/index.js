import React from 'react';
import ProfileIcon from '../../../../../components/ProfileIcon';
import AlarmResultWrapper from './AlarmResultWrapper';

const AlarmResult = () => {
  return (
    <AlarmResultWrapper>
      <div>
        <ProfileIcon />
      </div>
      <div>
        <span>정소영님이 회원님의 게시물을 좋아합니다.</span>
      </div>
      <div>
        <ProfileIcon />
      </div>
    </AlarmResultWrapper>
  );
};

export default AlarmResult;
