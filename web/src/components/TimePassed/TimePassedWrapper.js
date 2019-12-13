import styled from 'styled-components';

const TimePassedWrapper = styled.span`
  display: inline-block;

  color: ${({ theme }) => theme.palette.gray_font};
  font-size: 0.8rem;

  margin: 4px 15px 2px;
`;

export default TimePassedWrapper;
