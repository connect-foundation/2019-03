import styled from 'styled-components';

const NavBackground = styled.nav`
  /* Layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  /* Box */
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border_secondary};
  box-sizing: border-box;

  /* Background */
  background-color: white;

  /* Media query */
  @media screen and (min-width: 600px) {
    padding: 0px 20%;
  }
`;

export default NavBackground;
