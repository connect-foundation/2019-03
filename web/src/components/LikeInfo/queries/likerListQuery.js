const likerListQuery = postId => `{
  likerList(postId: ${postId}) {
    id
    username
    name
    profileImage
    followStatus
  }
}
`;

export default likerListQuery;
