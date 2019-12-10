import styled, { css } from 'styled-components';

const borderStyle = css`
  ${({ theme }) => css`
    border: solid 1px ${theme.palette.border};
  `}}
`;
const backgroundColorStyle = css`
  ${({ theme }) => css`
    background-color: ${theme.palette.white};
  `}}
`;
const PostDetailPageWrapper = styled.div`
  width: 950px;
  margin: -10px auto 16px auto;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  ${borderStyle};
  ${backgroundColorStyle}
`;

export default PostDetailPageWrapper;
