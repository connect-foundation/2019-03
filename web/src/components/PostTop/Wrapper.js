import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${props => {
    const borderColor = props.theme.palette.border;
    return css`
      border: 1px solid ${borderColor};
    `;
  }}
  .username {
    margin-left: 10px;
  }
`;

export default Wrapper;
