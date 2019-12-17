import { detailPostCacheObj, postListCacheObj } from './CacheObj';

const updateLikeOnDetailPost = ({ cache, post, myInfo }) => {
  const cacheObj = detailPostCacheObj(post, myInfo);
  const { post: postBeforeUpdate } = cache.readQuery(cacheObj);
  const postAfterUpdate = { ...postBeforeUpdate };
  const diff = postBeforeUpdate.isLike ? -1 : 1;
  postAfterUpdate.isLike = !postBeforeUpdate.isLike;
  postAfterUpdate.likerInfo.likerCount += diff;
  cache.writeQuery({
    ...cacheObj,
    data: { post: postAfterUpdate },
  });
};

const updateLikeOnPostList = ({ cache, targetId, myInfo }) => {
  const cacheObj = postListCacheObj(myInfo);
  const { followingPostList: postListBeforeUpdate } = cache.readQuery(cacheObj);
  const postListAfterUpdate = [...postListBeforeUpdate];
  const targetIndex = postListAfterUpdate.findIndex(
    post => post.id === targetId,
  );
  const targetPost = postListAfterUpdate[targetIndex];
  const diff = targetPost.isLike ? -1 : 1;
  targetPost.isLike = !targetPost.isLike;
  targetPost.likerInfo.likerCount += diff;
  cache.writeQuery({
    ...cacheObj,
    data: { followingPostList: postListAfterUpdate },
  });
};

export { updateLikeOnDetailPost, updateLikeOnPostList };
