export default ({ promiseResolver, isLoading, isLast }) => (
  prev,
  { fetchMoreResult },
) => {
  setTimeout(() => {
    promiseResolver();
    isLoading.current = false;
  });
  if (!fetchMoreResult) return prev;
  if (!fetchMoreResult.likerInfoList.length) {
    isLast.current = true;
    return prev;
  }
  const isWrongData =
    [...prev.likerInfoList].pop().updatedAt <=
    fetchMoreResult.likerInfoList[0].updatedAt;
  if (isWrongData) return prev;
  return {
    ...prev,
    likerInfoList: [...prev.likerInfoList, ...fetchMoreResult.likerInfoList],
  };
};
