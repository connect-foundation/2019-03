const createPostLike = (postId, userId) => `
  mutation {
    createPostLike(PostLike: {PostId: ${postId}, UserId: ${userId}})
  }
`;

export default createPostLike;
