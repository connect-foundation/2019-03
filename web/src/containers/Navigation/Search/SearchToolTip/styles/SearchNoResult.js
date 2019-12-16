import styled from 'styled-components';

const SearchNoResult = styled.div`
  /* Layout */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Box */
  width: 250px;
  padding: 20px;

  /* Font */
  font-size: 0.8em;
  color: ${({ theme }) => theme.palette.gray_font};
`;

export default SearchNoResult;
