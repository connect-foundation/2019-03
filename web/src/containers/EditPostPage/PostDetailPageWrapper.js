import styled, { css } from 'styled-components';

const borderStyle = css`
  ${({ theme }) => css`
    border: solid 1px ${theme.palette.border};
  `}}
`;
const PostDetailPageWrapper = styled.div`
  width: 600px;
  margin: -10px auto 16px auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  ${borderStyle}
`;

export default PostDetailPageWrapper;
