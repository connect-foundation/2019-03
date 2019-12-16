import styled from 'styled-components';

const DEFAULT_LENGTH = 600;

const CropContainer = styled.div`
  position: relative;
  width: 90%;
  padding-bottom: 90%;
  @media screen and (min-width: 600px) {
    width: ${DEFAULT_LENGTH}px;
    height: ${DEFAULT_LENGTH}px;
    padding-bottom: 0px;
  }
`;

export default CropContainer;
