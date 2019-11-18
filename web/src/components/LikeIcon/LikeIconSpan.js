import styled, { css } from 'styled-components';

const TOTAL_LENGTH = 1000;
const ICON_LENGTH = 125;
const ICON_POS_X = -130;
const EMPTY_ICON_POS_Y = -245;
const FILL_ICON_POS_Y = -375;

const backgroundStyles = css`
  background-repeat: no-repeat;

  ${({ icon, isFill, ratio }) => {
    const bgSize = TOTAL_LENGTH / ratio;
    return css`
      background-image: url(${icon});
      background-size: ${bgSize}px ${bgSize}px;
      background-position-x: ${ICON_POS_X / ratio}px;
      background-position-y: ${isFill
        ? `${FILL_ICON_POS_Y / ratio}px`
        : `${EMPTY_ICON_POS_Y / ratio}px`};
    `;
  }}
`;

const spanStyles = css`
  display: inline-block;

  ${({ ratio }) => {
    const length = ICON_LENGTH / ratio;
    return css`
      width: ${length}px;
      height: ${length}px;
    `;
  }}
`;

const LikeIconSpan = styled.span`
  ${backgroundStyles};
  ${spanStyles}
`;

LikeIconSpan.defaultProps = {
  ratio: 1,
  isFill: false,
};

export default LikeIconSpan;
