import { gql } from 'apollo-boost';

const READ_POST_SIMPLE = gql`
  query Post($postURL: String!) {
    post(postURL: $postURL) {
      id
      content
      writer {
        username
      }
      imageURL
      postURL
    }
  }
`;

export default READ_POST_SIMPLE;
