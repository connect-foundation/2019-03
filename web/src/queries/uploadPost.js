import { gql } from 'apollo-boost';

const UPLOAD_POST = gql`
  mutation UploadPostMutation(
    $file: Upload!
    $userId: Int!
    $content: String!
  ) {
    UploadPostMutation(file: $file, userId: $userId, content: $content)
  }
`;

export default UPLOAD_POST;
