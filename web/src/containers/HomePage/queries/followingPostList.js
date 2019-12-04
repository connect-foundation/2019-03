import { gql } from 'apollo-boost';

const FOLLOWING_POST_LIST = gql`
  query FollowingPostList($myId: Int, $offset: Int, $limit: Int) {
    followingPostList(id: $myId, offset: $offset, limit: $limit) {
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
  }
`;

export default FOLLOWING_POST_LIST;
