import styled, { css } from 'styled-components';

const StyledTextBox = styled.div`
  background-color: black;
  padding: 10px 10px 10px 10px;
  box-sizing: content-box;
  border-radius: 5px;
  ${({ theme }) =>
    css`
      background-color: ${theme.palette.gray_background};
    `}
`;
export default StyledTextBox;
