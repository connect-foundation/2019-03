import styled, { css } from 'styled-components';

const FollowButton = styled.button`
  /* Box */
  padding: 8px;
  border: 0;
  border-radius: 10%;
  flex: 0 0 auto;
  outline: none;

  /* Font */
  font-weight: 600;

  /* Property */
  cursor: pointer;

  /* Color */
  ${({ theme }) => {
    const { blue, white } = theme.palette;
    return css`
      background-color: ${blue};
      color: ${white};
    `;
  }}
`;

export default FollowButton;
