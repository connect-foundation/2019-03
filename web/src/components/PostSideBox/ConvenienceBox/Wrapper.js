import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => {
    const borderColor = theme.palette.border;
    return css`
      border-top: 1px solid ${borderColor};
    `;
  }}
  padding: 0 16px;
`;

const IconBox = styled.div``;

export { IconBox };
export default Wrapper;
