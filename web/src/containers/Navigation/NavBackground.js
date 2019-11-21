import styled from 'styled-components';

const NavBackground = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.border_secondary};
  height: 80px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 20%;
`;

export default NavBackground;
