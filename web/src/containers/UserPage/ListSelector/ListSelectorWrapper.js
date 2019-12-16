import styled from 'styled-components';

const ListSelectorWrapper = styled.div`
  /* Layout */
  display: flex;
  justify-content: center;

  /* Box */
  width: 935px;
  height: 52px;
  border-top: 1px solid ${({ theme }) => theme.palette.border};
`;

export default ListSelectorWrapper;
