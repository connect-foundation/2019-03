import styled, { css } from 'styled-components';

const POST_IMAGE_LENGTH = 615;

const ViewPort = styled.div`
  /* background */
  ${({ img }) => {
    return css`
      background-image: url(${img.src});
      background-size: cover;
      background-repeat: no-repeat;
      width: ${POST_IMAGE_LENGTH}px;
      height: ${POST_IMAGE_LENGTH}px;
    `;
  }}
`;

export default ViewPort;
