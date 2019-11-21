import React, { useState } from 'react';

import StyledFollowButton from './StyledFollowButton';

const FollowButton = ({ followStatus }) => {
  const [currentFollowStatus, setCurrentFollowStatus] = useState(followStatus);
  const changeFollowStatus = () => {
    switch (currentFollowStatus) {
      case '팔로우':
        setCurrentFollowStatus('요청됨');
        break;
      case '요청됨':
        setCurrentFollowStatus('팔로잉');
        break;
      case '팔로잉':
        setCurrentFollowStatus('팔로우');
        break;
      default:
        setCurrentFollowStatus('오류. 새로고침 해주십시오.');
        break;
    }
  };
  return (
    <StyledFollowButton
      status={currentFollowStatus}
      onClick={changeFollowStatus}
    >
      {currentFollowStatus}
    </StyledFollowButton>
  );
};

FollowButton.defaultProps = {
  followStatus: '팔로우',
};

export default FollowButton;
