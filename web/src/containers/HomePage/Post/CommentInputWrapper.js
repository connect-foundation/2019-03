import styled from 'styled-components';

const CommentInputWrapper = styled.div`
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.palette.border};

  margin-top: 4px;

  width: 615px;
  min-height: 55px;
`;

export default CommentInputWrapper;
