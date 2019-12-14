import { gql } from 'apollo-boost';

const COMMENT_LIST = gql`
  query CommentList($PostId: Int!, $offset: Int, $limit: Int) {
    commentList(PostId: $PostId, offset: $offset, limit: $limit) {
      id
      content
      updatedAt
      writer {
        username
        profileImage
      }
    }
  }
`;

export default COMMENT_LIST;
