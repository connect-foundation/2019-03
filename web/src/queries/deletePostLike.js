import { gql } from 'apollo-boost';

const DELETE_POST_LIKE = gql`
  mutation DeletePostLike($PostId: Int!, $UserId: Int!) {
    deletePostLike(PostLike: { PostId: $PostId, UserId: $UserId })
  }
`;

export default DELETE_POST_LIKE;
