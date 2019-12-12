import styled, { css } from 'styled-components';

import icon from '../../images/icon-1.png';

const TOTAL_LENGTH = 1000;
const ICON_LENGTH = 125;

const iconPicker = css`
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

const sizes = css`
  ${({ ratio }) => {
    const length = ICON_LENGTH / ratio;
    return css`
      width: ${length}px;
      height: ${length}px;
    `;
  }}
`;

const IconImage = styled.span`
  display: inline-block;
  cursor: pointer;
  ${iconPicker};
  ${sizes}
`;

IconImage.defaultProps = {
  ratio: 1,
};

export default IconImage;
