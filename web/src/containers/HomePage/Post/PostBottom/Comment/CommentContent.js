import styled, { css } from 'styled-components';

const CommentContent = styled.span`
  padding-right: 2px;
  line-height: 1;

  ${({ isFold }) => {
    if (!isFold) return null;

    return css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `;
  }}
`;

export default CommentContent;
