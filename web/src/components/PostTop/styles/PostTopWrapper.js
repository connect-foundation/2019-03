import styled, { css } from 'styled-components';

const PostTopWrapper = styled.header`
  /* Layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  /* Box */
  width: 100%;
  padding: 16px;
  flex: 0 0 auto;
  box-sizing: border-box;

  /* Other */
  ${({ theme }) => {
    const borderColor = theme.palette.border;
    return css`
      border-bottom: 1px solid ${borderColor};
      background-color: ${theme.palette.white};
    `;
  }}

  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    .username {
      margin-left: 10px;
    }
  }
`;

export default PostTopWrapper;
