import styled from 'styled-components';

const ListWrapper = styled.ul`
  /* Layout */
  list-style-type: none;

  /* Box */
  flex: 0 0 236px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0px;
  border-right: 1px solid ${({ theme }) => theme.palette.border};
  box-sizing: border-box;
`;
export default ListWrapper;
