import styled from 'styled-components';

const StyledTime = styled.time`
  color: ${({ theme }) => theme.palette.gray_font};
  font-size: 15px;
  font-weight: 400;
  margin-right: 16px;
`;

export default StyledTime;
