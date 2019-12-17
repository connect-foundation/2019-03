import { gql } from 'apollo-boost';

const CREATE_COMMENT = gql`
  mutation CreateComment(
    $PostId: Int!
    $WriterId: Int!
    $UserId: Int!
    $content: String!
  ) {
    createComment(
      content: $content
      depth: null
      WriterId: $WriterId
      PostId: $PostId
      UserId: $UserId
    ) {
      id
      content
      updatedAt
      writer {
        username
        profileImage
      }
      PostId
    }
  }
`;

export default CREATE_COMMENT;
