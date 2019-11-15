import styled, { css } from 'styled-components';

const TOTAL_WIDTH = 1000;
const TOTAL_HEIGHT = 1000;
const ICON_WIDTH = 125;
const ICON_HEIGHT = 125;
const ICON_POS_X = -130;
const EMPTY_ICON_POS_Y = -245;
const FILL_ICON_POS_Y = -375;

const backgroundStyles = css`
  background-image: url(${({ icon }) => icon});
  background-position-x: ${({ ratio }) => ICON_POS_X / ratio}px;
  background-position-y: ${({ isFill, ratio }) =>
    isFill ? `${FILL_ICON_POS_Y / ratio}px` : `${EMPTY_ICON_POS_Y / ratio}px`};
  background-size: ${({ ratio }) =>
    `${TOTAL_WIDTH / ratio}px ${TOTAL_HEIGHT / ratio}px`};
  background-repeat: no-repeat;
`;

const spanStyles = css`
  ${backgroundStyles};

  display: inline-block;
  width: ${({ ratio }) => ICON_WIDTH / ratio}px;
  height: ${({ ratio }) => ICON_HEIGHT / ratio}px;
`;

const LikeIconSpan = styled.span`
  ${spanStyles}
`;

export default LikeIconSpan;
