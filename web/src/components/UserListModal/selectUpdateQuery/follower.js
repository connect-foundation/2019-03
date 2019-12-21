export default ({ promiseResolver, isLoading, isLast }) => (
  prev,
  { fetchMoreResult },
) => {
  setTimeout(() => {
    promiseResolver();
    isLoading.current = false;
  });
  if (!fetchMoreResult) return prev;
  if (!fetchMoreResult.followerList.length) {
    isLast.current = true;
    return prev;
  }
  const isWrongData =
    [...prev.followerList].pop().updatedAt <=
    fetchMoreResult.followerList[0].updatedAt;
  if (isWrongData) return prev;
  return {
    ...prev,
    followerList: [...prev.followerList, ...fetchMoreResult.followerList],
  };
};
