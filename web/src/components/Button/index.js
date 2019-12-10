import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 9px;

  /* 크기 */
  font-size: 14px;

  /* 색상 */
  ${({ theme, btnStyle }) => {
    let color;
    let backgroundColor;
    switch (btnStyle) {
      case 'primary':
        color = theme.palette['white'];
        backgroundColor = theme.palette['blue'];
        break;
      case 'secondary':
        color = theme.palette['black'];
        backgroundColor = theme.palette['gray_button'];
        break;
      default:
        break;
    }
    return css`
      color: ${color};
      background: ${backgroundColor};
    `;
  }}
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
  btnStyle: 'primary',
};

export default Button;
