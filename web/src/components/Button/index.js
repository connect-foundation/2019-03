import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border-radius: 3px;
  border-width: 1px;
  border-style: border;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 9px;

  /* 크기 */
  font-size: 14px;

  /* 색상 */
  ${({ theme, btnStyle }) => {
    const {
      white,
      blue,
      secondary,
      black,
      light,
      border_secondary: borderSecondary,
    } = theme.palette;
    let color;
    let backgroundColor;
    let borderColor;
    switch (btnStyle) {
      case 'primary':
        color = white;
        backgroundColor = blue;
        borderColor = blue;
        break;
      case 'secondary':
        color = white;
        backgroundColor = secondary;
        borderColor = secondary;
        break;
      case 'light':
        color = black;
        backgroundColor = light;
        borderColor = borderSecondary;
        break;
      default:
        break;
    }
    return css`
      color: ${color};
      background: ${backgroundColor};
      border-color: ${borderColor};
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
