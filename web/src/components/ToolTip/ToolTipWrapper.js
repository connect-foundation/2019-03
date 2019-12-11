import styled from 'styled-components';

const ToolTipWrapper = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.white};
  z-index: 200;
`;

export default ToolTipWrapper;
