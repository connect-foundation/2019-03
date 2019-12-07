import styled, { css } from 'styled-components';

const StyledTextBox = styled.textarea`
  display: block;
  width: 100%;
  background-color: black;
  padding: 10px 10px 10px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  ${({ theme }) =>
    css`
      background-color: ${theme.palette.gray_background};
    `}
`;
export default StyledTextBox;
