import { FOLLOWING_POST_LIST } from '../../queries';

const POST_REQUEST_DEFAULT_LIMIT = 5;

const postListReadQueryOption = myInfo => {
  return {
    query: FOLLOWING_POST_LIST,
    variables: {
      myId: myInfo.id,
      limit: POST_REQUEST_DEFAULT_LIMIT,
    },
  };
};

export default postListReadQueryOption;
