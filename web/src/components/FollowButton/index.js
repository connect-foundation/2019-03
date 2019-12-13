import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import StyledFollowButton from './StyledFollowButton';
import FollowCheckingModal from '../FollowCheckingModal';

const FollowButton = ({
  followStatus,
  className,
  username,
  myId,
  userId,
  onFollowCancel,
  onFollow,
}) => {
  // folowStatus {null: 팔로우하고있지 않은 상태(팔로우하지 않을 때 삭제? 0?), 0: 팔로우하고 있는 상태, 1: 비공개 계정에 요청한 상태}
  // 팔로우 취소 또는 팔로우시 로컬에 반영되어야할 일이 있으면 함수형태로 onFollowCancel, onFollow에 props를 내려주면 됨.
  const [currentFollowStatus, setCurrentFollowStatus] = useState(followStatus);
  const [isVisible, setIsVisible] = useState(false);

  const requestFollowingQuery = gql`
    mutation RequestFollowing($myId: Int!, $userId: Int!) {
      RequestFollowing(myId: $myId, userId: $userId) {
        from
        to
        status
        updatedAt
      }
    }
  `;
  const requestFollowingCancellationQuery = gql`
    mutation RequestFollowingCancellation($myId: Int!, $userId: Int!) {
      RequestFollowingCancellation(myId: $myId, userId: $userId) {
        from
        to
      }
    }
  `;

  const [requestFollowing] = useMutation(requestFollowingQuery);
  const [requestFollowingCancellation] = useMutation(
    requestFollowingCancellationQuery,
  );

  const onClick = () => setIsVisible(isVisible => !isVisible);

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
        setIsVisible(isVisible => !isVisible);
        break;
      // case 1:
      //   setCurrentFollowStatus('팔로잉');
      //   setIsVisible(isVisible => !isVisible);
      //   break;
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
      >
        {buttonText}
      </StyledFollowButton>
      <FollowCheckingModal
        isVisible={isVisible}
        onClick={onClick}
        cancelFollowing={cancelFollowing}
        username={username}
      />
    </>
  );
};

FollowButton.defaultProps = {
  followStatus: null,
};

export default FollowButton;
