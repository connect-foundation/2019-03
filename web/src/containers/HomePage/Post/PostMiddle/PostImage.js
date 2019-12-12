import styled from 'styled-components';

const POST_IMAGE_LENGTH = 615;

const PostImage = styled.div`
  background-image: url(${({ imageURL }) => imageURL});
  background-size: cover;
  background-repeat: no-repeat;

  border-bottom: 1px solid ${({ theme }) => theme.palette.border};

  width: ${POST_IMAGE_LENGTH}px;
  height: ${POST_IMAGE_LENGTH}px;

  margin-bottom: 4px;

  cursor: pointer;
`;

export default PostImage;
