import styled from 'styled-components';

const ModalContent = styled.div`
  display: flex;
  margin: 0;
  padding: 8px 16px;
  box-sizing: border-box;

  section {
    flex: 1;
    margin-left: 12px;
  }
  section div {
    font-size: 14px;
    font-weight: 600;
  }
  section span {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.gray_font};
  }
`;

export default ModalContent;
