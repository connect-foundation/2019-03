import React from 'react';
import styled, { css } from 'styled-components';

const ModalBlock = styled.div`
  width: 320px;
  z-index: 700;
  border-radius: 10px;
  ${props => {
    const grayBackground = props.theme.palette.gray_background;
    return css`
      background-color: ${grayBackground};
    `;
  }}
`;

export default ModalBlock;
