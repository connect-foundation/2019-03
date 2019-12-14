import styled from 'styled-components';

const TextMoreButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.palette.gray_font};
  font-size: 0.8rem;
  line-height: 1;

  flex: 1 0 auto;

  cursor: pointer;

  display: ${({ isFold }) => (isFold ? '' : 'none')};
`;

export default TextMoreButton;
