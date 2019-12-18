import styled from 'styled-components';

const MyAppInfo = styled.div`
  /* Box */
  margin-top: 6px;

  /* Font */
  font-size: 14px;
  color: ${({ theme }) => theme.palette.gray_font};

  /* Other */
  cursor: pointer;
`;

export default MyAppInfo;
