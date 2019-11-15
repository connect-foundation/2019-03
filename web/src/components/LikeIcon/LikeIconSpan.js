import styled, { css } from 'styled-components';

const TOTAL_WIDTH = 1000;
const TOTAL_HEIGHT = 1000;
const ORIGIN_ICON_WIDTH = 125;
const ORIGIN_ICON_HEIGHT = 125;
const OFFSET_WIDTH = -1;
const OFFSET_HEIGHT_OF_EMPTY = -2;
const OFFSET_HEIGHT_OF_FILL = -3;
const RATIO_WIDTH = 3;
const RATIO_HEIGHT = 3;

const backgroundWidth = TOTAL_WIDTH / RATIO_WIDTH;
const backgroundHeight = TOTAL_HEIGHT / RATIO_HEIGHT;
const iconWidth = ORIGIN_ICON_WIDTH / RATIO_WIDTH;
const iconHeight = ORIGIN_ICON_HEIGHT / RATIO_HEIGHT;

const backgroundStyles = css`
  background-image: url(${({ icon }) => icon});
  background-position-x: ${iconWidth * OFFSET_WIDTH - 2}px;
  background-position-y: ${({ isFill }) =>
    isFill
      ? `${iconHeight * OFFSET_HEIGHT_OF_FILL + 1}px`
      : `${iconHeight * OFFSET_HEIGHT_OF_EMPTY + 3}px`};
  background-size: ${backgroundWidth}px ${backgroundHeight}px;
  background-repeat: no-repeat;
`;

const spanStyles = css`
  ${backgroundStyles};

  display: inline-block;
  width: ${iconWidth}px;
  height: ${iconHeight}px;
`;

const LikeIconSpan = styled.span`
  ${spanStyles}
`;

export default LikeIconSpan;
