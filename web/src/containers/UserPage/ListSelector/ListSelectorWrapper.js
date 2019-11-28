import styled, { css } from 'styled-components';

const ListSelectorWrapper = styled.div`
  width: 935px;
  height: 52px;
  display: flex;
  justify-content: center;
  ${({ theme }) => css`
    border-top: 1px solid ${theme.palette.border};
  `}
`;

export default ListSelectorWrapper;
