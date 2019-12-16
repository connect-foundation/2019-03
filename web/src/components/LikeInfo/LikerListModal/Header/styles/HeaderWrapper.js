import styled from 'styled-components';

const HeaderWrapper = styled.div`
  /* Layout */
  display: flex;

  /* Box */
  width: 100%;
  border-bottom-style: solid 1px ${({ theme }) => theme.palette.border};
`;

export default HeaderWrapper;
