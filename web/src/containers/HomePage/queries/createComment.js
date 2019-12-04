import { gql } from 'apollo-boost';

const CREATE_COMMENT = gql`
  mutation CreateComment($PostId: Int!, $UserId: Int!, $content: String!) {
    createComment(
      content: $content
      depth: null
      PostId: $PostId
      UserId: $UserId
    ) {
      id
      content
      writer {
        username
        profileImage
      }
      PostId
    }
  }
`;

export default CREATE_COMMENT;
