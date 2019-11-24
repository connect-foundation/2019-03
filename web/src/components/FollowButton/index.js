import React, { useState } from 'react';

import StyledFollowButton from './StyledFollowButton';
import FollowCheckingModal from '../FollowCheckingModal';

const FollowButton = ({ followStatus }) => {
  const [currentFollowStatus, setCurrentFollowStatus] = useState(followStatus);
  const [isVisible, setIsVisible] = useState(false);

  const onClick = () => setIsVisible(isVisible => !isVisible);

  const changeFollowStatus = () => {
    switch (currentFollowStatus) {
      case '팔로우':
        setCurrentFollowStatus('요청됨');
        break;
      case '요청됨':
        setCurrentFollowStatus('팔로잉');
        setIsVisible(isVisible => !isVisible);
        break;
      case '팔로잉':
        setCurrentFollowStatus('팔로우');
        setIsVisible(isVisible => !isVisible);
        break;
      default:
        throw new Error(
          `Current follow status is wrong : ${currentFollowStatus}`,
        );
    }
  };
  return (
    <>
      <StyledFollowButton
        status={currentFollowStatus}
        onClick={changeFollowStatus}
      >
        {currentFollowStatus}
      </StyledFollowButton>
      <FollowCheckingModal isVisible={isVisible} onClick={onClick} />
    </>
  );
};

FollowButton.defaultProps = {
  followStatus: '팔로우',
};

export default FollowButton;
