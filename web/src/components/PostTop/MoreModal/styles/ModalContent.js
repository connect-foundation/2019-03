import styled, { css } from 'styled-components';

const ModalContent = styled.div`
  /* Box */
  padding: 20px 20px;

  /* Font */
  font-size: 0.9rem;
  text-align: center;

  /* Other */
  ${({ theme, followcancel, cancel }) => {
    const borderColor = theme.palette.border;
    return css`
      border-bottom: ${cancel ? 'none' : `1px solid ${borderColor}`};
      color: ${followcancel ? theme.palette.pink : 'black'};
      font-weight: ${followcancel ? 'bold' : ''};
    `;
  }};

  /* Property */
  cursor: pointer;
`;

export default ModalContent;
