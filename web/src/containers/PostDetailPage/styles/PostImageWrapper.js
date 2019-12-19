import styled from 'styled-components';

const DEFAULT_LENGTH = 600;

const PostImageWrapper = styled.div`
  /* Box */
  flex: 0 0 auto;

  /* Media query */
  @media screen and (min-width: 600px) {
    width: ${DEFAULT_LENGTH}px;
    height: ${DEFAULT_LENGTH}px;
  }
`;

export default PostImageWrapper;
