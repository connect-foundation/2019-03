import styled, { css } from 'styled-components';

const Label = styled.label`
  /* Font */
  font-size: 16px;
  font-weight: 600;
  text-align: right;

  /* Other */
  ${({ required }) => {
    if (!required) return null;
    return css`
      &::after {
        content: '*';
        color: red;
        padding-left: 2px;
        font-weight: bold;
      }
    `;
  }}
`;

export default Label;
