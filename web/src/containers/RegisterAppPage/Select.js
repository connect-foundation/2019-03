import styled from 'styled-components';

const Select = styled.select`
  padding: 10px 50px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.palette.border};

  option {
    padding: 10px 50px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.palette.border};
  }
`;

export default Select;
