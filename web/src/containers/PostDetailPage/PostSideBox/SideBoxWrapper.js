import styled, { css } from 'styled-components';

const borderStyle = css`
  ${({ theme }) => css`
    border-top: solid 1px ${theme.palette.border};
    border-right: solid 1px ${theme.palette.border};
    border-bottom: solid 1px ${theme.palette.border};
  `}}
`;

const SideBoxWrapper = styled.div`
  width: 335px;
  height: ${({ theme }) => theme.post_length}px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${borderStyle}
`;

export default SideBoxWrapper;
