import styled, { css } from 'styled-components';

const profileImageStyle = css`
  ${({ imageURL, ratio }) => {
    const PROFILE_LENGTH = (32 * ratio) / 10;
    return css`
      background-image: url(${imageURL});
      background-size: cover;
      background-repeat: no-repeat;
      width: ${PROFILE_LENGTH}px;
      height: ${PROFILE_LENGTH}px;
    `;
  }}
`;

const viewportStyle = css`
  ${({ ratio }) => {
    const PROFILE_LENGTH = (32 * ratio) / 10;
    return css`
      width: ${PROFILE_LENGTH}px;
      height: ${PROFILE_LENGTH}px;
      border-radius: 50%;
      flex: none;
    `;
  }}
`;

const ProfileIconWrapper = styled.div`
  ${profileImageStyle}
  ${viewportStyle}
`;

export default ProfileIconWrapper;
