import styled from 'styled-components';

const NewPostWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .section {
    margin: 10px;
  }

  .toast-body {
    color: black;
    margin-left: 10px;
  }

  .crop-container {
    position: relative;
    width: 650px;
    height: 650px;
  }

  .controls {
    width: 20%;
  }
`;

export default NewPostWrapper;
