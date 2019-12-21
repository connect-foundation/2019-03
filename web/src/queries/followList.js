import { gql } from 'apollo-boost';

const FOLLOW_LIST = gql`
  query FollowList($myId: ID!, $userId: ID!, $cursor: String, $limit: Int) {
    followList(myId: $myId, userId: $userId, cursor: $cursor, limit: $limit) {
      id
      name
      username
      profileImage
      isFollow
      updatedAt
    }
  }
`;

export default FOLLOW_LIST;
