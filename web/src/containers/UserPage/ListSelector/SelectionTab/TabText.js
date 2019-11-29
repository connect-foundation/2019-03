import styled, { css } from 'styled-components';

const TabText = styled.div`
  ${({ theme, isselected }) => css`
    color: ${isselected ? 'black' : theme.palette.gray_font};
  `}
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 600;
`;

export default TabText;
