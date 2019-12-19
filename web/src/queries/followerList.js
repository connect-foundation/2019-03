import { gql } from 'apollo-boost';

const FOLLOWER_LIST = gql`
  query FollowerList($myId: ID!, $userId: ID!) {
    followerList(myId: $myId, userId: $userId) {
      id
      name
      username
      profileImage
      isFollow
    }
  }
`;

export default FOLLOWER_LIST;
