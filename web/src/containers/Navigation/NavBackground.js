import styled from 'styled-components';

const NavBackground = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.border_secondary};
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 20%;
`;

export default NavBackground;
