import { gql } from 'apollo-boost';

const READ_POST = gql`
  query Post($postURL: String!, $id: ID!) {
    post(postURL: $postURL, id: $id) {
      id
      imageURL
      postURL
      content
      isLike
      updatedAt
      UserId
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

export default READ_POST;
