import styled, { css } from 'styled-components';

const ConvenienceBoxWrapper = styled.div`
  ${({ theme }) => {
    const borderColor = theme.palette.border;
    return css`
      border-top: 1px solid ${borderColor};
    `;
  }}
  padding: 0 16px;
`;

export default ConvenienceBoxWrapper;
