const followingPostListQuery = myId => `{
  followingPostList(id: ${myId}) {
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
