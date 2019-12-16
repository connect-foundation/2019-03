import styled from 'styled-components';

const NavBackground = styled.nav`
  position: fixed;
  left: 0;
  top: 0;

  height: 80px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border_secondary};
  box-sizing: border-box;

  z-index: 100;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (min-width: 600px) {
    padding: 0px 20%;
    width: 100%;
  }
`;

export default NavBackground;
