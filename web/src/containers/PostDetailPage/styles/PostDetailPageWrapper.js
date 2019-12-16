import styled from 'styled-components';

const DEFAULT_LENGTH = 600;

const PostDetailPageWrapper = styled.div`
  /*  Layout */
  display: flex;
  align-items: stretch;

  /* Box */
  width: 100%;
  margin: -50px 0 0 0;
  border: solid 1px ${({ theme }) => theme.palette.border};
  box-sizing: border-box;

  /* Background */
  background-color: ${({ theme }) => theme.palette.white};

  /* Media query */
  @media screen and (min-width: 600px) {
    width: 900px;
    height: ${DEFAULT_LENGTH}px;
    margin: -50px auto 16px auto;
  }
`;

export default PostDetailPageWrapper;
