import styled, { css } from 'styled-components';

const ToolTipBody = styled.div`
  display: inline-block;
  left: 40%;
  ${({ theme }) => {
    const { border } = theme.palette;
    return css`
      border: 1px solid ${border};
    `;
  }}
  padding: 20px;
  border-radius: 5px;
  z-index: 1;
`;

export default ToolTipBody;
