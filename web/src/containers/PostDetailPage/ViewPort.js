import styled, { css } from 'styled-components';

const ViewPort = styled.div`
  /* background */
  ${({ img, theme }) => {
    return css`
      background-image: url(${img.src});
      background-size: cover;
      background-repeat: no-repeat;
      width: ${theme.post_length}px;
      height: ${theme.post_length}px;
    `;
  }}
`;

export default ViewPort;
