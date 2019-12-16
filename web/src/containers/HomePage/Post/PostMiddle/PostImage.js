import styled from 'styled-components';

const PostImage = styled.div`
  background-image: url(${({ imageURL }) => imageURL});
  background-size: cover;
  background-repeat: no-repeat;

  border-bottom: 1px solid ${({ theme }) => theme.palette.border};

  width: 100%;
  padding-bottom: 100%;

  margin-bottom: 4px;

  cursor: pointer;
`;

export default PostImage;
