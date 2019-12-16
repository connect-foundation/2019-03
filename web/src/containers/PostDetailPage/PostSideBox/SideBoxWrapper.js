import styled, { css } from 'styled-components';

const borderStyle = css`
  ${({ theme }) => css`
    border-left: solid 1px ${theme.palette.border};
  `}}
`;

const SideBoxWrapper = styled.div`
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${borderStyle}
`;

export default SideBoxWrapper;
