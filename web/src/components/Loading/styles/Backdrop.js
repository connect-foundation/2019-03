import styled from 'styled-components';

const Backdrop = styled.div`
  /* Layout */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  position: absolute;
  z-index: 10;

  /* Box */
  width: 100%;
  height: 100%;

  /* Background */
  background-color: white;
`;

export default Backdrop;
