import styled, { css } from 'styled-components';

const FollowCancelContent = styled.label`
  /* Box */
  padding: 20px 20px;
  box-sizing: border-box;

  /* Font */
  font-size: 0.9rem;
  text-align: center;
  font-weight: bold;

  /* Other */
  ${({ theme }) => {
    const borderColor = theme.palette.border;
    return css`
      border-bottom: 1px solid ${borderColor};
      color: ${theme.palette.pink};
    `;
  }};

  /* Property */
  cursor: pointer;
`;

export default FollowCancelContent;
