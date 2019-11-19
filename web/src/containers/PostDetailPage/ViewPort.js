import styled, { css } from 'styled-components';

const ViewPort = styled.div`
  /* background */
  ${({ img }) => {
    return css`
      background-image: url(${img.src});
      background-size: cover;
      background-repeat: no-repeat;
      width: 615px;
      height: 615px;
    `;
  }}
`;

export default ViewPort;
