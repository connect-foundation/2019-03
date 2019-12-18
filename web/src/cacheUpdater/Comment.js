import {
  commentListReadQueryOption,
  postListReadQueryOption,
} from './readQueryOptions';

const updateCommentListCacheOfPostList = ({
  cache,
  myInfo,
  createdComment,
  PostId,
}) => {
  const readQueryOption = postListReadQueryOption(myInfo);
  const { followingPostList } = cache.readQuery(readQueryOption);
  const changedFollowingPostList = [...followingPostList];
  changedFollowingPostList
    .find(post => +post.id === PostId)
    .commentList.push(createdComment);
  cache.writeQuery({
    ...readQueryOption,
    data: { followingPostList: changedFollowingPostList },
  });
};

const updateCommentListCacheOfDetailPost = ({
  cache,
  createdComment,
  PostId,
}) => {
  const readQueryOption = commentListReadQueryOption({ PostId });
  const { commentList } = cache.readQuery(readQueryOption);
  cache.writeQuery({
    ...readQueryOption,
    data: { commentList: [createdComment].concat(commentList) },
  });
};

export { updateCommentListCacheOfPostList, updateCommentListCacheOfDetailPost };
