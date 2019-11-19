import styled, { css } from 'styled-components';

const SideBoxWrapper = styled.div`
  width: 335px;
  height: 614px;
  display: flex;
  flex-direction: column;
  ${({ theme }) => {
    const borderColor = theme.palette.border;
    return css`
      border-top: solid 1px ${borderColor};
      border-right: solid 1px ${borderColor};
      border-bottom: solid 1px ${borderColor};
      }
    `;
  }}
`;

export default SideBoxWrapper;
