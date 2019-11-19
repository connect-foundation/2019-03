import styled, { css } from 'styled-components';

const ModalWrapper = styled.div`
  width: 320px;
  z-index: 700;
  border-radius: 10px;
  ${({ theme }) => {
    const grayBackground = theme.palette.gray_background;
    return css`
      background-color: ${grayBackground};
    `;
  }}
`;

export default ModalWrapper;
