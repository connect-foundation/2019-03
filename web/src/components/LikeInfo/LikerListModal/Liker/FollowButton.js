import styled, { css } from 'styled-components';

const FollowButton = styled.button`
  flex: 0 0 auto;
  padding: 8px;

  font-weight: 600;
  outline: none;
  border: 0;
  border-radius: 10%;
  cursor: pointer;

  ${({ theme }) => {
    const { blue, white } = theme.palette;
    return css`
      background-color: ${blue};
      color: ${white};
    `;
  }}
`;

export default FollowButton;
