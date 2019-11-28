import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
  placeholder: '본문 입력...',
})`
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: none;
  width: 400px;
  height: 40px;
  padding: 10px;
`;

export default Input;
