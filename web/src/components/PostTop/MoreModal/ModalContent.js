import React from 'react';
import styled, { css } from 'styled-components';

const ModalContent = styled.div`
  text-align: center;
  ${({ theme, followcancel, cancel }) => {
    const borderColor = theme.palette.border;
    return css`
      border-bottom: ${cancel ? 'none' : `1px solid ${borderColor}`};
      color: ${followcancel ? theme.palette.pink : 'black'};
      font-weight: ${followcancel ? 'bold' : ''};
    `;
  }};
  padding: 20px 20px;
  font-size: 0.9rem;
  cursor: pointer;
`;

export default ModalContent;
