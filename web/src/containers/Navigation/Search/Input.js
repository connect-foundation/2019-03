import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
  placeholder: '검색',
})`
  border: none;
  outline: none;
  margin-left: 20px;
  z-index: 200;
`;

export default Input;
