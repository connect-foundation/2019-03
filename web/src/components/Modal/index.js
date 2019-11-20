import React from 'react';

import { ModalBackground, ModalWrapper } from './styles';

const Modal = ({ content, onClick, className, style }) => {
  const onCancel = ({ target }) => {
    const { styledComponentId: scId } = ModalBackground;
    const { classList } = target;
    if (!classList.contains(scId)) return;
    onClick();
  };

  return (
    <ModalBackground onClick={onCancel}>
      <ModalWrapper style={style} className={className}>
        {content}
      </ModalWrapper>
    </ModalBackground>
  );
};

export default Modal;
