import {
  detailPostReadQueryOption,
  postListReadQueryOption,
} from './readQueryOptions';

const updateLikeCacheOfDetailPost = ({ cache, post, myInfo }) => {
  const readQueryOption = detailPostReadQueryOption(post, myInfo);
  const { post: postBeforeUpdate } = cache.readQuery(readQueryOption);
  const postAfterUpdate = { ...postBeforeUpdate };
  const diff = postBeforeUpdate.isLike ? -1 : 1;
  postAfterUpdate.isLike = !postBeforeUpdate.isLike;
  postAfterUpdate.likerInfo.likerCount += diff;
  cache.writeQuery({
    ...readQueryOption,
    data: { post: postAfterUpdate },
  });
};

const updateLikeCacheOfPostList = ({ cache, targetId, myInfo }) => {
  const readQueryOption = postListReadQueryOption(myInfo);
  const { followingPostList: postListBeforeUpdate } = cache.readQuery(
    readQueryOption,
  );
  const postListAfterUpdate = [...postListBeforeUpdate];
  const targetIndex = postListAfterUpdate.findIndex(
    post => post.id === targetId,
  );
  const targetPost = postListAfterUpdate[targetIndex];
  const diff = targetPost.isLike ? -1 : 1;
  targetPost.isLike = !targetPost.isLike;
  targetPost.likerInfo.likerCount += diff;
  cache.writeQuery({
    ...readQueryOption,
    data: { followingPostList: postListAfterUpdate },
  });
};

export { updateLikeCacheOfDetailPost, updateLikeCacheOfPostList };
