import styled from 'styled-components';

const SearchResultWrapper = styled.div`
  /* Layout */
  display: flex;
  flex-direction: row;

  /* Box */
  width: 250px;
  padding: 20px;
  border-bottom: ${({ theme, isLast }) =>
    isLast ? 'none' : `1px solid ${theme.palette.border}`};
`;

export default SearchResultWrapper;
