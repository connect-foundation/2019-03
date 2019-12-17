import { gql } from 'apollo-boost';

const CREATE_POST_LIKE = gql`
  mutation CreatePostLike($PostId: ID!, $WriterId: ID!, $UserId: ID!) {
    createPostLike(PostId: $PostId, WriterId: $WriterId, UserId: $UserId)
  }
`;
export default CREATE_POST_LIKE;
