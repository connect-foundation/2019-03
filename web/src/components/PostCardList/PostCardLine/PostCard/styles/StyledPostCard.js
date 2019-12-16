import styled from 'styled-components';

const StyledPostCard = styled.div`
  /* Box */
  width: 293px;
  height: 293px;

  /* Background */
  background-image: ${({ imageURL }) => `url(${imageURL})`};
  background-size: 100%;
`;

export default StyledPostCard;
