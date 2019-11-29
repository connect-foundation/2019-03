import styled, { css } from 'styled-components';

import StyledLink from '../../../../components/StyledLink';

const selectedTheme = css`
  border-top: 1px solid black;
`;

const unchosenTheme = css`
  border: none;
`;

const BorderTopLink = styled(StyledLink)`
  ${({ isselected }) => (isselected ? selectedTheme : unchosenTheme)}
  width: 52.141px;
  margin-right: 60px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:last-child {
    margin-right: 0px;
  }
`;

export default BorderTopLink;
