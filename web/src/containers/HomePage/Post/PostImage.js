import styled from 'styled-components';

const POST_IMAGE_LENGTH = 615;

const PostImage = styled.div`
  background-image: url(${({ imgSrc }) => imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  width: ${POST_IMAGE_LENGTH}px;
  height: ${POST_IMAGE_LENGTH}px;
`;

export default PostImage;
