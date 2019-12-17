import styled from 'styled-components';

const TimePassedWrapper = styled.span`
  /* Layout */
  display: inline-block;

  /* Box */
  margin: 4px 15px 2px;

  /* Font */
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.gray_font};
`;

export default TimePassedWrapper;
