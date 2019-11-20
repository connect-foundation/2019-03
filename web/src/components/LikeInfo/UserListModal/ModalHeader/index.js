import React from 'react';

import { HeaderWrapper, Title, ButtonWrapper, Cancel } from './styles';

const ModalHeader = ({ onClick: onToggle }) => {
  return (
    <HeaderWrapper>
      <ButtonWrapper />
      <Title>좋아요</Title>
      <ButtonWrapper onClick={onToggle}>
        <Cancel>X</Cancel>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default ModalHeader;
