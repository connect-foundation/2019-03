import styled from 'styled-components';

const TextMoreButton = styled.button`
  /* Layout */
  display: ${({ isFold }) => (isFold ? '' : 'none')};

  /* Box */
  border: none;
  outline: none;
  flex: 1 0 auto;

  /* Background */
  background-color: transparent;

  /* Font */
  color: ${({ theme }) => theme.palette.gray_font};
  font-size: 0.8rem;
  line-height: 1;


  cursor: pointer;
`;

export default TextMoreButton;
