const deleteCommentLike = (commentId, userId) => `
  mutation {
    deleteCommentLike(CommentLike: {CommentId: ${commentId}, UserId: ${userId}})
  }
`;

export default deleteCommentLike;
