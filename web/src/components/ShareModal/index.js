import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Modal from '../Modal';
import ModalContent from '../PostTop/MoreModal/ModalContent';

const ShareModal = ({ isVisible, setIsVisible, postURL }) => {
  const onClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;

  return (
    <Modal onClick={onClose}>
      <ModalContent>Facebook 공유</ModalContent>
      <CopyToClipboard text={`${process.env.REACT_APP_WEB_URL}/p/${postURL}`}>
        <ModalContent>링크 복사하기</ModalContent>
      </CopyToClipboard>
      <ModalContent cancel onClick={onClose}>
        취소
      </ModalContent>
    </Modal>
  );
};

export default ShareModal;
