import styled from 'styled-components';

const PostImage = styled.div`
  /* Background */
  background-image: url(${({ imageURL }) => imageURL});
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};

  /* Box */
  width: 100%;
  margin-bottom: 4px;
  padding-bottom: 100%;

  /* Property */
  cursor: pointer;
`;

export default PostImage;
