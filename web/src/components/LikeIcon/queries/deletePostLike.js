const deletePostLike = (postId, userId) => `
  mutation {
    deletePostLike(PostLike: {PostId: ${postId}, UserId: ${userId}})
  }
`;

export default deletePostLike;
