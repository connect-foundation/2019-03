import styled from 'styled-components';

const MoreCommentButton = styled.button`
  /* Layout */
  display: flex;
  justify-content: space-around;

  /* Box */
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border: none;

  /* Background */
  background-color: transparent;

  /* Property */
  :hover {
    cursor: pointer;
  }
`;

export default MoreCommentButton;
