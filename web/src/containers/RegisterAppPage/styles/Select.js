import styled from 'styled-components';

const Select = styled.select`
  /* Box */
  padding: 10px 50px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 5px;

  /* Property */
  option {
    padding: 10px 50px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.palette.border};
  }
`;

export default Select;
