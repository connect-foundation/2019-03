import { gql } from 'apollo-boost';

const DELETE_POST_LIKE = gql`
  mutation DeletePostLike($PostId: ID!, $UserId: ID!) {
    deletePostLike(PostId: $PostId, UserId: $UserId)
  }
`;

export default DELETE_POST_LIKE;
