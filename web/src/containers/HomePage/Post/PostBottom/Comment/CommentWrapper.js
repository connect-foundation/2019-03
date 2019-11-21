import styled from 'styled-components';

const CommentWrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: 0.95rem;
  margin-left: 6.5px;
  margin-top: ${({ isPostText }) => (isPostText ? 4 : 0)}px;
`;

export default CommentWrapper;
