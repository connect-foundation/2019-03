import { READ_POST } from '../queries';

const detailPostCacheObj = (post, myInfo) => {
  return {
    query: READ_POST,
    variables: {
      postURL: post.postURL,
      id: myInfo.id,
    },
  };
};

const updateDetailPost = (cache, post, myInfo) => {
  const cacheObj = detailPostCacheObj(post, myInfo);
  const { post: thisPost } = cache.readQuery(cacheObj);
  const postAfterUpdate = { ...thisPost };
  const diff = thisPost.isLike ? -1 : 1;
  postAfterUpdate.isLike = !thisPost.isLike;
  postAfterUpdate.likerInfo.likerCount += diff;
  cache.writeQuery({
    ...cacheObj,
    data: { post: postAfterUpdate },
  });
};

export { updateDetailPost };
