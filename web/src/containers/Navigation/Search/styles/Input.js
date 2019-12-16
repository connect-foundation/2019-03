import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
  placeholder: '검색',
})`
  /* Layout */
  z-index: 100;

  /* Box */
  margin-left: 20px;
  border: none;
  outline: none;
`;

export default Input;
