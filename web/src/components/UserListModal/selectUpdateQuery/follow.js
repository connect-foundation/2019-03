export default ({ promiseResolver, isLoading, isLast }) => (
  prev,
  { fetchMoreResult },
) => {
  setTimeout(() => {
    promiseResolver();
    isLoading.current = false;
  });
  if (!fetchMoreResult) return prev;
  if (!fetchMoreResult.followList.length) {
    isLast.current = true;
    return prev;
  }
  const isWrongData =
    [...prev.followList].pop().updatedAt <=
    fetchMoreResult.followList[0].updatedAt;
  if (isWrongData) return prev;
  return {
    ...prev,
    followList: [...prev.followList, ...fetchMoreResult.followList],
  };
};
