import styled from 'styled-components';

const ModalBackground = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 600;

  /* Box */
  width: 100%;
  height: 100%;

  /* Background */
  background-color: rgba(0, 0, 0, 0.65);
`;

export default ModalBackground;
