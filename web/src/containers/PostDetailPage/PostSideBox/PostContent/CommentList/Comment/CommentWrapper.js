import styled from 'styled-components';

const CommentWrapper = styled.li`
  display: flex;
  list-style-type: none;
  width: 100%;
  padding: 12px 16px 0px 16px;
  box-sizing: border-box;
  & + & {
    margin-top: 16px;
  }
  h3 {
    font-weight: 600;
    display: inline;
    margin-right: 5px;
  }
  article {
    display: inline;
  }
`;

export default CommentWrapper;
