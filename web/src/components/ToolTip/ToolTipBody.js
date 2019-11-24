import styled, { css } from 'styled-components';

const ToolTipBody = styled.div`
  ${({ theme }) => {
    const { border, white } = theme.palette;
    return css`
      border: 1px solid ${border};
      background: ${white};
    `;
  }}
  border-radius: 5px;
  z-index: 1;
  height: 400px;
  overflow-y: scroll;
`;

export default ToolTipBody;
