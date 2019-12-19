import { gql } from 'apollo-boost';

const FOLLOWER_LIST = gql`
  query FollowerList($myId: ID!, $userId: ID!, $cursor: String, $limit: Int) {
    followerList(myId: $myId, userId: $userId, cursor: $cursor, limit: $limit) {
      id
      name
      username
      profileImage
      isFollow
      updatedAt
    }
  }
`;

export default FOLLOWER_LIST;
