import styled from 'styled-components';

const DEFAULT_LENGTH = 600;

const ViewPort = styled.div`
  flex: 0 0 auto;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: 600px) {
    width: ${DEFAULT_LENGTH}px;
    height: 100%;
  }
`;

export default ViewPort;
