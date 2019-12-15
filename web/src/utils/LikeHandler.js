import { READ_POST, FOLLOWING_POST_LIST } from '../queries';

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

const updateDetailPost = ({ cache, post, myInfo }) => {
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

const updatedPostList = ({ cache, targetId, myInfo }) => {
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

export { updateDetailPost, updatedPostList };
