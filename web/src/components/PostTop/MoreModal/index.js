import React from 'react';

import ModalBackground from './ModalBackground';
import ModalBlock from './ModalBlock';
import ModalContent from './ModalContent';
import StyledLink from '../StyledLink';

const MoreModal = ({ visible, writer, myInfo, post }) => {
  if (!visible) return null;
  return (
    <ModalBackground>
      <ModalBlock>
        {writer.username !== myInfo.username && writer.isFollow && (
          <ModalContent followcancel>팔로우 취소</ModalContent>
        )}
        <StyledLink to={`/p/${post.postHash}`}>
          <ModalContent>게시물로 이동</ModalContent>
        </StyledLink>
        <ModalContent>링크 복사하기</ModalContent>
        <ModalContent cancel>취소</ModalContent>
      </ModalBlock>
    </ModalBackground>
  );
};

export default MoreModal;
