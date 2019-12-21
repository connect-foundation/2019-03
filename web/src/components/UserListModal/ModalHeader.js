import styled from 'styled-components';

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border_secondary};
  h1 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }
`;

export default ModalHeader;
