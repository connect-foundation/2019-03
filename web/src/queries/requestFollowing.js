import { gql } from 'apollo-boost';

const REQUEST_FOLLOWING = gql`
  mutation RequestFollowing($myId: ID!, $userId: ID!) {
    RequestFollowing(myId: $myId, userId: $userId) {
      from
      to
      status
      updatedAt
    }
  }
`;

export default REQUEST_FOLLOWING;
