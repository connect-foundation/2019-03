import styled from 'styled-components';

const SettingPageWrapper = styled.div`
  /* Layout */
  display: flex;

  /* Box */
  width: 100%;
  max-width: 935px;
  margin: auto;
  border: 1px solid ${({ theme }) => theme.palette.border};

  /* Background */
  background-color: white;
`;
export default SettingPageWrapper;
