import { gql } from 'apollo-boost';

const LIKER_LIST = gql`
  query LikerList($postId: ID!) {
    likerList(postId: $postId) {
      id
      username
      name
      profileImage
      followStatus
    }
  }
`;

export default LIKER_LIST;
