import styled, { css } from 'styled-components';

const selectedTheme = css`
  border-top: 1px solid black;
`;

const unchosenTheme = css`
  border: none;
`;

const BorderTopLink = styled.div`
  /* Layout */
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* Box */
  width: 52.141px;
  margin-right: 60px;

  /* Property */
  cursor: pointer;
  &:last-child {
    margin-right: 0px;
  }

  /* Other */
  ${({ isselected }) => (isselected ? selectedTheme : unchosenTheme)}
`;

export default BorderTopLink;
