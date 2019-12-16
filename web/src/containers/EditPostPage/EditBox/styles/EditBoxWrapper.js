import styled from 'styled-components';

const EditBoxWrapper = styled.div`
  /* Box */
  width: 100%;
  padding: 10px 5px;
  border-left: solid 1px ${({ theme }) => theme.palette.border};
  box-sizing: border-box;
`;

export default EditBoxWrapper;
