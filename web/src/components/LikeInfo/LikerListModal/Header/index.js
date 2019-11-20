import React from 'react';

import { HeaderWrapper, Title, ButtonWrapper, Cancel } from './styles';

const ModalHeader = ({ onClick }) => {
  return (
    <HeaderWrapper>
      <ButtonWrapper />
      <Title>좋아요</Title>
      <ButtonWrapper onClick={onClick}>
        <Cancel>X</Cancel>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default ModalHeader;
