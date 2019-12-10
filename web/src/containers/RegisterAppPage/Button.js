import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.blue};
  border-radius: 5px;
  border: none;
  outline: none;
  width: 100px;
  padding: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.white};
  margin-top: 20px;
`;

export default Button;
