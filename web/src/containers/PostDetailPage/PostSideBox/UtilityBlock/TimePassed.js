import styled from 'styled-components';

const TimePassed = styled.time`
  color: ${({ theme }) => theme.palette.gray_font};
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  font-size: 10px;
`;

export default TimePassed;
