import styled, { css } from 'styled-components';

const ToolTipBody = styled.div`
  /* Layout */
  position: absolute;
  top: 47px;
  overflow-x: hidden;
  overflow-y: auto;

  /* Box */
  max-height: 400px;
  border-radius: 5px;

  /* Other */
  ${({ theme }) => {
    const { border, white } = theme.palette;
    return css`
      border: 1px solid ${border};
      background: ${white};
    `;
  }}
`;

export default ToolTipBody;
