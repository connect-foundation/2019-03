import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 950px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
`;

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

export { ViewPort };

export default Wrapper;
