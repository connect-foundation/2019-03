import styled, { css } from 'styled-components';

const ToolTipArrow = styled.div`
  /* Layout */
  position: relative;
  top: 8px;
  left: 50%;
  z-index: 203;

  /* Box */
  width: 14px;
  height: 14px;
  transform: rotate(45deg);

  /* Other */
  ${({ theme }) => {
    const { border, white } = theme.palette;
    return css`
      border-top: 1px solid ${border};
      border-left: 1px solid ${border};
      background-color: ${white};
    `;
  }};
`;

export default ToolTipArrow;
