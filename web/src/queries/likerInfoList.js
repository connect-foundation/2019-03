import { gql } from 'apollo-boost';

const LIKER_INFO_LIST = gql`
  query LikerInfoList($myId: ID!, $PostId: ID!, $cursor: String, $limit: Int) {
    likerInfoList(
      myId: $myId
      PostId: $PostId
      cursor: $cursor
      limit: $limit
    ) {
      id
      name
      username
      profileImage
      isFollow
      updatedAt
    }
  }
`;

export default LIKER_INFO_LIST;
