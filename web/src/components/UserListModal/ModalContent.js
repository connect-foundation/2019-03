import styled from 'styled-components';

const ModalContent = styled.div`
  height: 300px;
  overflow-y: scroll;
  ul {
    padding: 0;
  }
  ul li {
    display: flex;
    margin: 0;
    padding: 8px 16px;
  }
  ul li section {
    flex: 1;
    margin-left: 12px;
  }
  ul li section div {
    font-size: 14px;
    font-weight: 600;
  }
  ul li section span {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.gray_font};
  }
`;

export default ModalContent;
