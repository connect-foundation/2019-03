import { commentListCacheObj, postListCacheObj } from './CacheObj';

const createCommentOnPostList = ({ cache, myInfo, createdComment, PostId }) => {
  const cacheObj = postListCacheObj(myInfo);
  const { followingPostList } = cache.readQuery(cacheObj);
  const changedFollowingPostList = [...followingPostList];
  changedFollowingPostList
    .find(post => +post.id === PostId)
    .commentList.push(createdComment);
  cache.writeQuery({
    ...cacheObj,
    data: { followingPostList: changedFollowingPostList },
  });
};

const createCommentOnDetailPost = ({ cache, createdComment, PostId }) => {
  const cacheObj = commentListCacheObj({ PostId });
  const { commentList } = cache.readQuery(cacheObj);
  cache.writeQuery({
    ...cacheObj,
    data: { commentList: [createdComment].concat(commentList) },
  });
};

export { createCommentOnPostList, createCommentOnDetailPost };
