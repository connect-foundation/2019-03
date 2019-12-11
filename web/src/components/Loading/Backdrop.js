import styled from 'styled-components';

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.5;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Backdrop;
