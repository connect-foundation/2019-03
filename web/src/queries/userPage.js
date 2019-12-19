import { gql } from 'apollo-boost';

const USER_PAGE = gql`
  query UserPage($username: String!, $myId: ID!) {
    userPage(username: $username, myId: $myId) {
      isExistingUser
      userInfo {
        name
        id
        profileImage
        isFollowing
        postNumber
        followersNum
        followsNum
      }
      postCard {
        postURL
        imageURL
      }
    }
  }
`;

export default USER_PAGE;
