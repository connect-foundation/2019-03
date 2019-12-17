import styled from 'styled-components';

const POST_WIDTH = 615;

const PostWrapper = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;

  /* Box */
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.border};
  & + & {
    margin-top: 60px;
  }

  /* Background */
  background-color: ${({ theme }) => theme.palette.white};

  /* Media query */
  @media screen and (min-width: 600px) {
    width: ${POST_WIDTH}px;
  }
`;

export default PostWrapper;
