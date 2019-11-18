import styled, { css } from 'styled-components';

const Wrapper = styled.ul`
  padding: 0px;
  overflow: auto;
`;

const MoreCommentButton = styled.button`
  width: 100%;
  height: 40px;
  margin: 10px 0;

  background-color: transparent;
  border: none;

  display: flex;
  justify-content: space-around;

  :hover {
    cursor: pointer;
  }
`;

export { MoreCommentButton };

export default Wrapper;
