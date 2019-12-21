import { gql } from 'apollo-boost';

const REQUEST_FOLLOWING_CANCELLATION = gql`
  mutation RequestFollowingCancellation($myId: ID!, $userId: ID!) {
    RequestFollowingCancellation(myId: $myId, userId: $userId) {
      from
      to
    }
  }
`;

export default REQUEST_FOLLOWING_CANCELLATION;
