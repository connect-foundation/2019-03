import styled from 'styled-components';

const AllCommentShowButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  margin-left: 6.5px;
  margin-bottom: 10px;
  padding: 0px;

  line-height: 1;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.gray_font};
`;

export default AllCommentShowButton;
