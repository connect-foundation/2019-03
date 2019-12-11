import styled, { css } from 'styled-components';

const borderStyle = css`
  ${({ theme }) =>
    css`
      border-right: 1px solid;
      border-color: ${theme.palette.border};
    `}
`;

const ListWrapper = styled.ul`
  flex: 0 0 236px;
  list-style-type: none;
  padding-inline-start: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  ${borderStyle}
  box-sizing: border-box;
`;
export default ListWrapper;
