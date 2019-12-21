import styled from 'styled-components';

const SideBoxWrapper = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;

  /* Box */
  height: 100%;
  border-left: solid 1px ${({ theme }) => theme.palette.border};
  box-sizing: border-box;
  flex: 1 0 300px;
`;

export default SideBoxWrapper;
