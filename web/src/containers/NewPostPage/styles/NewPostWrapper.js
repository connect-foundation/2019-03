import styled from 'styled-components';

const NewPostWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: -50px;
  .toast-body {
    color: black;
    margin-left: 10px;
  }

  .controls {
    width: 20%;
  }

  @media screen and (min-width: 600px) {
    margin-top: 0px;
  }
`;

export default NewPostWrapper;
