import { gql } from 'apollo-boost';

const TAGGED_POSTS = gql`
  query TaggedPosts($username: String!, $myId: Int!) {
    taggedPosts(username: $username, myId: $myId) {
      postURL
      imageURL
    }
  }
`;

export default TAGGED_POSTS;
