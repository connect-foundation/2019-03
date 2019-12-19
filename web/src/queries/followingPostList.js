import { gql } from 'apollo-boost';

const FOLLOWING_POST_LIST = gql`
  query FollowingPostList($myId: ID, $cursor: String, $limit: Int) {
    followingPostList(id: $myId, cursor: $cursor, limit: $limit) {
      id
      imageURL
      postURL
      content
      isLike
      updatedAt
      writer {
        id
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
