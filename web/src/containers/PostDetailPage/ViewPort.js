import styled, { css } from 'styled-components';

const ViewPort = styled.div`
  /* background */
  ${({ img, theme }) => {
    return css`
      flex: 0 0 auto;
      background-image: url(${img});
      background-size: cover;
      background-repeat: no-repeat;
      width: ${theme.post_length}px;
      height: ${theme.post_length}px;
    `;
  }}
`;

export default ViewPort;
