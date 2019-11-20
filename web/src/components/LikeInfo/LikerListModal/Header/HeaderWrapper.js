import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.palette.border};
`;

export default HeaderWrapper;
