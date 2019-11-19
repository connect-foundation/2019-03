import styled, { css } from 'styled-components';

const WIDTH = 25;
const HEIGHT = 25;

const backgroundStyle = css`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-size: ${WIDTH}px ${HEIGHT}px;
`;

const spanStyle = css`
  margin-right: 5px;
  border-radius: 50%;

  width: ${WIDTH}px;
  height: ${HEIGHT}px;
`;

const ProfileImage = styled.span`
  ${backgroundStyle}
  ${spanStyle}
  cursor: pointer;
`;

export default ProfileImage;
