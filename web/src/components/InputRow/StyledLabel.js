import styled, { css } from 'styled-components';

const StyledLabel = styled.label`
  text-align: right;
  font-size: 16px;
  font-weight: 600;
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

export default StyledLabel;
