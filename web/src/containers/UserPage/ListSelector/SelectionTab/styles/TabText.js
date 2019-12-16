import styled, { css } from 'styled-components';

const TabText = styled.div`
  /* Font */
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;

  /* Other */
  ${({ theme, isSelected }) => css`
    color: ${isSelected ? 'black' : theme.palette.gray_font};
  `}

  /* Property */
  cursor: pointer;
`;

export default TabText;
