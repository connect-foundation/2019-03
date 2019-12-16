import styled from 'styled-components';

const POST_WIDTH = 615;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-color: ${({ theme }) => theme.palette.border};
  border-width: 1px;
  border-style: solid;

  background-color: ${({ theme }) => theme.palette.white};

  & + & {
    margin-top: 60px;
  }

  @media screen and (min-width: 600px) {
    width: ${POST_WIDTH}px;
  }
`;

export default PostWrapper;
