import styled from 'styled-components';

const Content = styled.textarea.attrs({
  maxLength: '800',
  placeholder: '본문 입력...',
})`
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 5px;
  outline: none;
  width: 400px;
  padding: 10px;
  font-size: 14px;
  resize: vertical;

  &:empty::before {
    content: '본문 입력...';
    font-size: 14px;
    color: ${({ theme }) => theme.palette.gray_font};
  }
`;

export default Content;
