import styled, { css } from 'styled-components';

const followButtonCSS = css`
  ${({ theme }) => css`
    background: ${theme.palette.blue};
    color: ${theme.palette.white};
    border-color: ${theme.palette.blue};
  `}
`;

const followingButtonCSS = css`
  background: 0 0;
  color: black;
  ${({ theme }) =>
    css`
      border-color: ${theme.palette.border_secondary};
    `}
`;

const StyledFollowButton = styled.button`
  /* Layout */
  overflow: hidden;
  text-overflow: ellipsis;

  /* Box */
  padding: 0 24px;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;

  /* Font */
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  outline: 0;

  /* Other */
  ${({ status }) => (status === null ? followButtonCSS : followingButtonCSS)}

  /* Property */
  cursor: pointer;
`;

export default StyledFollowButton;
