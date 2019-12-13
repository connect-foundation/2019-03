import { gql } from 'apollo-boost';

const CREATE_POST_LIKE = gql`
  mutation CreatePostLike($PostId: Int!, $WriterId: Int!, $UserId: Int!) {
    createPostLike(
      PostLike: { PostId: $PostId, WriterId: $WriterId, UserId: $UserId }
    )
  }
`;
export default CREATE_POST_LIKE;
