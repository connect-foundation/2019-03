import React from 'react';

import { ModalBackground, ModalWrapper } from './styles';

const stopPropagation = e => e.stopPropagation();

const Modal = ({ onClick, children, className, style }) => {
  return (
    <ModalBackground onClick={onClick}>
      <ModalWrapper
        onClick={stopPropagation}
        style={style}
        className={className}
      >
        {children}
      </ModalWrapper>
    </ModalBackground>
  );
};

export default Modal;
