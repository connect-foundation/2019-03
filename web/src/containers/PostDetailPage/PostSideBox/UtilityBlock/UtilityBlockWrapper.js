import styled, { css } from 'styled-components';

const UtilityBlockWrapper = styled.div`
  ${({ theme }) => {
    const borderColor = theme.palette.border;
    return css`
      border-top: 1px solid ${borderColor};
    `;
  }}
  padding-bottom:8px;
`;

export default UtilityBlockWrapper;
