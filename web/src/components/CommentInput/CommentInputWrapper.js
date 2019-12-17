import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  flex: 0 0 56px;
  font-size: 14px;
  display: flex;
  align-items: center;
  input {
    border: none;
    margin-left: 16px;
  }
  ${({ theme }) => {
    const borderColor = theme.palette.border;
    return css`
      border-top: 1px solid ${borderColor};
    `;
  }}
`;

export default Wrapper;
