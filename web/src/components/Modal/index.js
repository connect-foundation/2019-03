import React from 'react';

import { ModalBackground, ModalWrapper } from './styles';

const Modal = ({ content, onClick, className, style }) => {
  return (
    <ModalBackground onClick={onClick}>
      <ModalWrapper style={style} className={className}>
        {content}
      </ModalWrapper>
    </ModalBackground>
  );
};

export default Modal;
