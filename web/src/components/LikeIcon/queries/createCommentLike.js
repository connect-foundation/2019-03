const createCommentLike = (commentId, userId) => `
  mutation {
    createCommentLike(CommentLike: {CommentId: ${commentId}, UserId: ${userId}})
  } 
`;

export default createCommentLike;
