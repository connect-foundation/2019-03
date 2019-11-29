import styled, { css } from 'styled-components';

const StyledPostCard = styled.div`
  width: 293px;
  height: 293px;
  ${({ imageURL }) => css`
    background-image: ${`url(${imageURL})`};
  `}
  background-size: 100%;
`;

export default StyledPostCard;
