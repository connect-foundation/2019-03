import { gql } from 'apollo-boost';

const UPLOAD_POST = gql`
  mutation UploadPost($file: Upload!, $userId: Int!, $content: String!) {
    createPost(file: $file, userId: $userId, content: $content) {
      id
      postURL
      imageURL
      content
      updatedAt
      UserId
    }
  }
`;

export default UPLOAD_POST;
