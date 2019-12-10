import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
})`
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 5px;
  outline: none;
  width: 400px;
  height: 20px;
  padding: 10px;
`;

export default Input;
