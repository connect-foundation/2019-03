import styled, { css } from 'styled-components';

import icon from '../../images/icon-1.png';

const TOTAL_LENGTH = 1000;
const ICON_LENGTH = 125;

const backgroundStyles = css`
  background-repeat: no-repeat;

  ${({ ratio, posX, posY }) => {
    const bgSize = TOTAL_LENGTH / ratio;
    return css`
      background-image: url(${icon});
      background-size: ${bgSize}px ${bgSize}px;
      background-position-x: ${posX / ratio}px;
      background-position-y: ${posY / ratio}px;
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

const IconImage = styled.span`
  flex: 0 0 auto;
  ${backgroundStyles};
  ${spanStyles}
`;

IconImage.defaultProps = {
  ratio: 1,
};

export default IconImage;
