import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { ModalContent, StyledLink, Modal } from './styles';

const MoreModal = ({ isVisible, setIsVisible, writer, myInfo, postURL }) => {
  const clickClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;

  return (
    <Modal onClick={clickClose}>
      {writer.username !== myInfo.username && writer.isFollow && (
        <>
          <ModalContent followcancel>팔로우 취소</ModalContent>
        </>
      )}
      {writer.username === myInfo.username && (
        <>
          <StyledLink to={`edit/${postURL}`}>
            <ModalContent>게시물 수정</ModalContent>
          </StyledLink>
          <ModalContent onClick={clickClose}>게시물 삭제</ModalContent>
        </>
      )}
      <StyledLink to={`/p/${postURL}`}>
        <ModalContent>게시물로 이동</ModalContent>
      </StyledLink>
      <CopyToClipboard text={`${process.env.REACT_APP_WEB_URL}/p/${postURL}`}>
        <ModalContent>링크 복사하기</ModalContent>
      </CopyToClipboard>
      <ModalContent cancel onClick={clickClose}>
        취소
      </ModalContent>
    </Modal>
  );
};

export default MoreModal;
