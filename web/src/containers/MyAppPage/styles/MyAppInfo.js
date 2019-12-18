import styled from 'styled-components';

const MyAppInfo = styled.div`
  margin-top: 6px;

  font-size: 14px;
  color: ${({ theme }) => theme.palette.gray_font};

  cursor: pointer;
`;

export default MyAppInfo;
