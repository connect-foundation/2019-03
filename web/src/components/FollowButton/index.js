import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import StyledFollowButton from './StyledFollowButton';
import FollowCheckingModal from '../FollowCheckingModal';
import {
  REQUEST_FOLLOWING,
  REQUEST_FOLLOWING_CANCELLATION,
} from '../../queries';

const FollowButton = ({
  followStatus,
  id,
  className,
  username,
  myId,
  userId,
  onFollowCancel,
  onFollow,
  userProfileImage,
}) => {
  const [currentFollowStatus, setCurrentFollowStatus] = useState(followStatus);
  const [isVisible, setIsVisible] = useState(false);

  const [requestFollowing] = useMutation(REQUEST_FOLLOWING);
  const [requestFollowingCancellation] = useMutation(
    REQUEST_FOLLOWING_CANCELLATION,
  );

  const onClick = () => setIsVisible(prevVisibleStatus => !prevVisibleStatus);

  const cancelFollowing = () => {
    requestFollowingCancellation({ variables: { myId, userId } });
    setCurrentFollowStatus(null);
    if (onFollowCancel) onFollowCancel();
    onClick();
  };

  const changeFollowStatus = () => {
    switch (currentFollowStatus) {
      case null:
        requestFollowing({ variables: { myId, userId } });
        setCurrentFollowStatus(0);
        if (onFollow) onFollow();
        break;
      case 0:
        setIsVisible(prevVisibleStatus => !prevVisibleStatus);
        break;
      default:
        throw new Error(
          `Current follow status is wrong : ${currentFollowStatus}`,
        );
    }
  };

  const getButtonText = () => {
    switch (currentFollowStatus) {
      case null:
        return '팔로우';
      case 0:
        return '팔로잉';
      case 1:
        return '요청됨';
      default:
        throw new Error(
          `Current follow status is wrong : ${currentFollowStatus}`,
        );
    }
  };
  const buttonText = getButtonText();

  return (
    <>
      <StyledFollowButton
        status={currentFollowStatus}
        onClick={changeFollowStatus}
        className={className}
        id={id}
      >
        {buttonText}
      </StyledFollowButton>
      <FollowCheckingModal
        isVisible={isVisible}
        onClick={onClick}
        cancelFollowing={cancelFollowing}
        username={username}
        userProfileImage={userProfileImage}
      />
    </>
  );
};

export default FollowButton;
