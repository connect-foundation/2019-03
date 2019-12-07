import styled, { css } from 'styled-components';

const buttonColor = css`
  ${({ theme }) => css`
    background: ${theme.palette.blue};
    color: ${theme.palette.white};
  `}
`;

const StyledButton = styled.button`
  padding: 0 24px;
  cursor: pointer;
  border-radius: 3px;
  border-style: none;
  border-width: 1px;
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ blue }) => blue && buttonColor};
  & + & {
    margin-left: 10px;
  }
`;
export default StyledButton;
