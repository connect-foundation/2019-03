import styled from 'styled-components';

const WIDTH = 25;
const HEIGHT = 25;

const ProfileImageSpan = styled.span`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-size: ${WIDTH}px ${HEIGHT}px;

  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  border-radius: 50%;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;

  cursor: pointer;
`;

export default ProfileImageSpan;
