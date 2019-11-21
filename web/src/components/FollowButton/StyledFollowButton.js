import styled, { css } from 'styled-components';

const StyledFollowButton = styled.button`
  padding: 0 24px;
  cursor: pointer;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ status }) =>
    status === '팔로우' ? followButtonCSS : followingButtonCSS}
`;

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

export default StyledFollowButton;
