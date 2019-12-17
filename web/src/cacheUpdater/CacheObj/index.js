import { READ_POST, FOLLOWING_POST_LIST, COMMENT_LIST } from '../../queries';

const detailPostCacheObj = (post, myInfo) => {
  return {
    query: READ_POST,
    variables: {
      postURL: post.postURL,
      id: myInfo.id,
    },
  };
};

const postListCacheObj = myInfo => {
  return {
    query: FOLLOWING_POST_LIST,
    variables: {
      myId: myInfo.id,
      limit: 5,
    },
  };
};

const commentListCacheObj = ({ PostId }) => {
  return {
    query: COMMENT_LIST,
    variables: {
      PostId,
      offset: 0,
      limit: 5,
    },
  };
};

export { detailPostCacheObj, postListCacheObj, commentListCacheObj };
