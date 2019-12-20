import React from 'react';

import ProfileIcon from '../ProfileIcon';
import { ModalContent } from '../PostTop/MoreModal/styles';
import ModalBackground from '../Modal/styles/ModalBackground';
import ModalWrapper from '../Modal/styles/ModalWrapper';
import { ModalHeaderText } from './styles';

const modalWrapperStyle = {
  zIndex: 900,
  width: '400px',
};

const modalHeaderStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '32 16 16 16',
};

const FollowCheckingModal = ({
  isVisible,
  onClick,
  cancelFollowing,
  username,
  userProfileImage,
}) => {
  const stopPropagation = e => e.stopPropagation();
  if (!isVisible) return <></>;
  return (
    <ModalBackground onClick={onClick} style={{ zIndex: 800 }}>
      <ModalWrapper onClick={stopPropagation} style={modalWrapperStyle}>
        <ModalContent>
          <div style={modalHeaderStyle}>
            <ProfileIcon ratio={20} imageURL={userProfileImage} />
            <ModalHeaderText>
              @{username}님의 팔로우를 취소하시겠어요?
            </ModalHeaderText>
          </div>
        </ModalContent>
        <ModalContent followcancel onClick={cancelFollowing}>
          팔로우 취소
        </ModalContent>
        <ModalContent cancel onClick={onClick}>
          취소
        </ModalContent>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default FollowCheckingModal;
