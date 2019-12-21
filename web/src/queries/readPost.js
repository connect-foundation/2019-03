import { gql } from 'apollo-boost';

const READ_POST = gql`
  query Post($postURL: String, $UserId: ID, $id: ID) {
    post(postURL: $postURL, UserId: $UserId, id: $id) {
      id
      imageURL
      postURL
      content
      isLike
      updatedAt
      UserId
      writer {
        id
        username
        profileImage
      }
      likerInfo {
        likerCount
        username
        profileImage
      }
    }
  }
`;

export default READ_POST;
