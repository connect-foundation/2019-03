import styled from 'styled-components';

const POST_WIDTH = 615;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: ${POST_WIDTH}px;

  border-color: ${({ theme }) => theme.palette.border};
  border-width: 1px;
  border-style: solid;

  & + & {
    margin-top: 60px;
  }
`;

export default PostWrapper;
