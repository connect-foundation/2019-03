import styled from 'styled-components';

const PostDetailPageWrapper = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: stretch;

  /* Box */
  width: 600px;
  margin: -10px auto 16px auto;
  border: solid 1px ${({ theme }) => theme.palette.border};
  box-sizing: border-box;
`;

export default PostDetailPageWrapper;
