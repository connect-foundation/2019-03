import { gql } from 'apollo-boost';

const FOLLOW_LIST = gql`
  query FollowList($myId: ID!, $userId: ID!) {
    followList(myId: $myId, userId: $userId) {
      id
      name
      username
      profileImage
      isFollow
    }
  }
`;

export default FOLLOW_LIST;
