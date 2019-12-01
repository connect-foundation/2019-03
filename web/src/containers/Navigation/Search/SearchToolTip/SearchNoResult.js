import styled from 'styled-components';

const SearchNoResult = styled.div`
  font-size: 0.8em;
  text-align: center;
  color: ${({ theme }) => theme.palette.gray_font};
  padding: 20px;
  width: 250px;
`;

export default SearchNoResult;
