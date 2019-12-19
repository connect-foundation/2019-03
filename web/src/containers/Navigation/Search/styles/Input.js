import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
  placeholder: '검색',
})`
  /* Layout */
  position: relative;

  /* Box */
  margin-left: 20px;
  border: none;
  outline: none;
`;

export default Input;
