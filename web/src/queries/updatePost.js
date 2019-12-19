import { gql } from 'apollo-boost';

const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $content: String) {
    updatePost(id: $id, content: $content) {
      id
      content
    }
  }
`;

export default UPDATE_POST;
