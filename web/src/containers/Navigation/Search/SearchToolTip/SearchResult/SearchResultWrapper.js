import styled from 'styled-components';

const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-bottom: ${({ theme, isLast }) =>
    isLast ? 'none' : `1px solid ${theme.palette.border}`};
  width: 250px;
`;

export default SearchResultWrapper;
