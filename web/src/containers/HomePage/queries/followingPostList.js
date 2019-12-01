const followingPostListQuery = (myId, offset, limit = 10) => `{
  followingPostList(id: ${myId}, offset: ${offset}, limit: ${limit}) {
    id
    imageURL
    postURL
    content
    isLike
    updatedAt
    writer {
      username
      isFollow
      profileImage
    }
    commentCount
    commentList {
      id
      content
      isLike
      writer {
        username
      }
    }
    likerInfo {
      likerCount
      username	
      profileImage
    }
  }
}`;

export default followingPostListQuery;
