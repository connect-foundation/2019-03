import React from 'react';
import ModalBackground from './ModalBackground';
import ModalBlock from './ModalBlock';
import ModalContent from './ModalContent';

const MoreModal = ({ visible, writer, myInfo }) => {
  if (!visible) return null;
  return (
    <ModalBackground>
      <ModalBlock>
        {writer.username !== myInfo.username && writer.isFollow && (
          <ModalContent followcancel>팔로우 취소</ModalContent>
        )}
        <ModalContent>게시물로 이동</ModalContent>
        <ModalContent>링크 복사하기</ModalContent>
        <ModalContent cancel>취소</ModalContent>
      </ModalBlock>
    </ModalBackground>
  );
};

export default MoreModal;
