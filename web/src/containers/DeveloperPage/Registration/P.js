import styled, { css } from 'styled-components';

const P = styled.p`
  margin-bottom: 5px;
  font-weight: bold;

  ${props => {
    if (!props.required) return null;
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

export default P;
