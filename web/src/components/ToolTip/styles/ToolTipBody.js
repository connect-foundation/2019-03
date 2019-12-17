import styled, { css } from 'styled-components';

const ToolTipBody = styled.div`
  /* Layout */
  overflow-x: hidden;
  overflow-y: scroll;

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
