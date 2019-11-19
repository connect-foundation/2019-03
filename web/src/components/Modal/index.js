import React from 'react';

import { ModalBackground, ModalWrapper } from './styles';

const Modal = ({ content, onClick }) => {
  return (
    <ModalBackground onClick={onClick}>
      <ModalWrapper>{content}</ModalWrapper>
    </ModalBackground>
  );
};

export default Modal;
