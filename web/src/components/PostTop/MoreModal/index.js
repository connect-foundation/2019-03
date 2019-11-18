import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import ModalBackground from './ModalBackground';
import ModalBlock from './ModalBlock';
import ModalContent from './ModalContent';
import StyledLink from '../StyledLink';

const MoreModal = ({ visible, setVisible, writer, myInfo, post }) => {
  const clickCancel = () => {
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <ModalBackground onClick={clickCancel}>
      <ModalBlock>
        {writer.username !== myInfo.username && writer.isFollow && (
          <ModalContent followcancel>팔로우 취소</ModalContent>
        )}
        <StyledLink to={`/p/${post.postHash}`}>
          <ModalContent>게시물로 이동</ModalContent>
        </StyledLink>
        <CopyToClipboard text={`localhost:3000/p/${post.postHash}`}>
          <ModalContent>링크 복사하기</ModalContent>
        </CopyToClipboard>
        <ModalContent cancel onClick={clickCancel}>
          취소
        </ModalContent>
      </ModalBlock>
    </ModalBackground>
  );
};

export default MoreModal;
