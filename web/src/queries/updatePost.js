import { gql } from 'apollo-boost';

const UPDATE_POST = gql`
  mutation UpdatePost($postURL: String!, $content: String!) {
    updatePost(content: $content, postURL: $postURL) {
      id
    }
  }
`;

export default UPDATE_POST;
