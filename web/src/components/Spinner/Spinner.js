import styled, { css, keyframes } from 'styled-components';

/**
 * Honor Code: https://stephanwagner.me/only-css-loading-spinner
 */

const spinner = keyframes`
    to {
      transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  &:before {
    ${({ size }) => css`
      width: ${size}px;
      height: ${size}px;
      margin-top: -${size / 2}px;
      margin-left: -${size / 2}px;
    `}
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;

    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #000;
    animation: ${spinner} 0.6s linear infinite;
  }
`;

export default Spinner;
