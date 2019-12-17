import styled from 'styled-components';

const Title = styled.h4`
  /* Font */
  font-weight: 600;
  color: ${({ theme }) => theme.palette.gray_font};
`;

export default Title;
