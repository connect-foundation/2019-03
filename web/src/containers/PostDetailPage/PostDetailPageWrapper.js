import styled, { css } from 'styled-components';

const DEFAULT_LENGTH = 600;

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
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  ${borderStyle};
  ${backgroundColorStyle}
  width:100%;
  margin: -50px 0 0 0;
  @media screen and (min-width: 600px) {
    width: 900px;
    height: ${DEFAULT_LENGTH}px;
    margin: -50px auto 16px auto;
  }
`;

export default PostDetailPageWrapper;
