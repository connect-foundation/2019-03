import styled from 'styled-components';

const PostContentWrapper = styled.div`
  /* Layout */
  overflow: auto;

  /* Box */
  flex: 1 1 100%;

  /* Others */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

export default PostContentWrapper;
