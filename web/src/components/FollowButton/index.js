import React, { useState } from 'react';

import StyledFollowButton from './StyledFollowButton';

const FollowButton = () => {
  const [followStatus, setFollowStatus] = useState('팔로우');
  const changeFollowStatus = () => {
    switch (followStatus) {
      case '팔로우':
        setFollowStatus('요청됨');
        break;
      case '요청됨':
        setFollowStatus('팔로잉');
        break;
      case '팔로잉':
        setFollowStatus('팔로우');
        break;
      default:
        setFollowStatus('오류. 새로고침해주십시오');
        break;
    }
  };
  return (
    <StyledFollowButton status={followStatus} onClick={changeFollowStatus}>
      {followStatus}
    </StyledFollowButton>
  );
};

export default FollowButton;
