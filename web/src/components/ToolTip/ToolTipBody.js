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
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export default ToolTipBody;
