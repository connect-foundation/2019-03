import styled, { css } from 'styled-components';

import StyledLink from '../../../../../components/StyledLink';

const selectedTheme = css`
  border-top: 1px solid black;
`;

const unchosenTheme = css`
  border: none;
`;

const BorderTopLink = styled(StyledLink)`
  /* Layout */
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* Box */
  width: 52.141px;
  margin-right: 60px;

  /* Property */
  &:last-child {
    margin-right: 0px;
  }

  /* Other */
  ${({ isSelected }) => (isSelected ? selectedTheme : unchosenTheme)}
`;

export default BorderTopLink;
