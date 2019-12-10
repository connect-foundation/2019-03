import styled, { css } from 'styled-components';

const borderStyle = css`
  ${({ theme }) =>
    css`
      border: 1px solid;
      border-color: ${theme.palette.border};
      border-radius: 5px;
    `}
`;
const SettingPageWrapper = styled.div`
  background-color: white;
  display: flex;
  max-width: 935px;
  width: 100%;
  margin: auto;
  ${borderStyle}
`;
export default SettingPageWrapper;
