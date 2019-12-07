import styled, { css } from 'styled-components';

const borderStyle = css`
  ${({ theme }) => css`
    border-left: solid 1px ${theme.palette.border};
  `}}
`;

const EditBoxWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 5px;
  ${borderStyle}
`;

export default EditBoxWrapper;
