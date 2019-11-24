const followingPostListQuery = myId => `{
  followingPostList(id: ${myId}) {
    id
    imageURL
    postURL
    content
    writer {
      username
      isFollow
      profileImage
    }
    commentCount
    commentList {
      content
      writer {
        username
      }
    }
    likerInfo {
      likerCount
      username	
      profileImage
    }
    updatedAt
  }
}`;

export default followingPostListQuery;
