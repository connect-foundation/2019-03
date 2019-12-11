import styled, { css } from 'styled-components';

const ToolTipArrow = styled.div`
  ${({ theme }) => {
    const { border, white } = theme.palette;
    return css`
      border-top: 1px solid ${border};
      border-left: 1px solid ${border};
      background-color: ${white};
    `;
  }};
  transform: rotate(45deg);
  width: 14px;
  height: 14px;
  z-index: 203;
  position: relative;
  left: 50%;
  top: 8px;
`;

export default ToolTipArrow;
