import { gql } from 'apollo-boost';

const DELETE_POST = gql`
  mutation DeltePost($postURL: String!) {
    deletePost(postURL: $postURL) {
      postURL
    }
  }
`;

export default DELETE_POST;
