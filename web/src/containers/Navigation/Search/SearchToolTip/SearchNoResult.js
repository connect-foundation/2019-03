import styled from 'styled-components';

const SearchNoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  color: ${({ theme }) => theme.palette.gray_font};
  padding: 20px;
  width: 250px;
`;

export default SearchNoResult;
