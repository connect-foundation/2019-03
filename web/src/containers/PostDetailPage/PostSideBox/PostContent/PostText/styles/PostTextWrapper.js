import styled from 'styled-components';

const PostTextWrapper = styled.li`
  /* Layout */
  display: flex;
  list-style-type: none;

  /* Box */
  width: 100%;
  padding: 12px 16px 8px 16px;
  box-sizing: border-box;
  border-bottom: solid 0.5px ${({ theme }) => theme.palette.border};
  & + & {
    margin-top: 16px;
  }

  h3 {
    /* Layout */
    display: inline;

    /* Box */
    margin-right: 5px;

    /* Font */
    font-weight: 600;
  }
  article {
    /* Layout */
    display: inline;
  }
`;

export default PostTextWrapper;
