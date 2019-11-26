import styled from 'styled-components';

const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-bottom: ${({ isLast }) => (isLast ? 'none' : `1px solid lightgray`)};
  width: 250px;
`;

export default SearchResultWrapper;
