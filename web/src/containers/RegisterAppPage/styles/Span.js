import styled from 'styled-components';

const Title = styled.span`
  /* Layout */
  display: block;

  /* Box */
  margin-top: 2px;

  /* Font */
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.gray_font};
`;

export default Title;
