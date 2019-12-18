import { COMMENT_LIST } from '../../queries';

const COMMENT_REQUEST_INITIAL_OFFSET = 0;
const COMMENT_REQUEST_DEFAULT_LIMIT = 5;

const commentListReadQueryOption = ({ PostId }) => {
  return {
    query: COMMENT_LIST,
    variables: {
      PostId,
      offset: COMMENT_REQUEST_INITIAL_OFFSET,
      limit: COMMENT_REQUEST_DEFAULT_LIMIT,
    },
  };
};

export default commentListReadQueryOption;
