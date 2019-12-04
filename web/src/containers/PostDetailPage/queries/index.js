import { gql } from 'apollo-boost';

const COMMENT_LIST = gql`
  query CommentList($PostId: Int!, $offset: Int, $limit: Int) {
    commentList(PostId: $PostId, offset: $offset, limit: $limit) {
      id
      content
      writer {
        username
        profileImage
      }
    }
  }
`;

const ADD_COMMENT = gql`
  mutation AddComment($PostId: Int!, $UserId: Int!, $content: String!) {
    createComment(
      content: $content
      depth: null
      PostId: $PostId
      UserId: $UserId
    ) {
      id
      content
      writer {
        username
        profileImage
      }
      PostId
    }
  }
`;

export { COMMENT_LIST, ADD_COMMENT };
