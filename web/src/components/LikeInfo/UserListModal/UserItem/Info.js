import styled, { css } from 'styled-components';

const FONT_REM = 1;
const RATIO = 0.8;

const Info = styled.span`
  line-height: 1;
`;

const Username = styled(Info)`
  font-weight: 600;
  font-size: ${FONT_REM}rem;
`;

const Name = styled(Info)`
  font-size: ${FONT_REM * RATIO}rem;
  color: ${({ theme }) => theme.palette.gray_font};
`;

export { Username, Name };
