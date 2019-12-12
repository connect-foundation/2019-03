import { gql } from 'apollo-boost';

const CREATE_POST_LIKE = gql`
  mutation CreatePostLike($PostId: Int!, $UserId: Int!) {
    createPostLike(PostLike: { PostId: $postId, UserId: $userId })
  }
`;
export default CREATE_POST_LIKE;
