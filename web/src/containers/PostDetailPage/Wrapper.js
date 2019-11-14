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
    const ratio = 615 / img.width;
    return css`
      background-image: url(${img.src});
      background-size: 615px ${img.height * ratio}px;
      background-repeat: no-repeat;
      width: 615px;
      height: ${img.height * ratio}px;
    `;
  }}
`;

const SideBox = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
`;

export { ViewPort, SideBox };

export default Wrapper;
