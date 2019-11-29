/**
 * Honor Code: https://medium.com/@ghur2002/react%EC%97%90%EC%84%9C-infinite-scroll-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-128d64ea24b5
 */
export function infiniteScroll(callback) {
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight,
  );
  const scrollTop = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop,
  );
  const { clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight * 0.98) {
    callback();
  }
}

const SECOND = 1000;
const TYPE_SECOND = 's';
const MINUTE = 60000;
const TYPE_MINUTE = 'm';
const HOUR = 3600000;
const TYPE_HOUR = 'h';
const DAY = 86400000;
const TYPE_DAY = 'd';
const WEEK = 604800000;
const TYPE_WEEK = 'w';

export function dateDiff(fromDate, toDate) {
  const diff = toDate - fromDate;

  if (diff < SECOND) return { type: TYPE_SECOND, diff: 0 };
  if (diff < MINUTE)
    return { type: TYPE_SECOND, diff: Math.floor(diff / SECOND) };
  if (diff < HOUR)
    return { type: TYPE_MINUTE, diff: Math.floor(diff / MINUTE) };
  if (diff < DAY) return { type: TYPE_HOUR, diff: Math.floor(diff / HOUR) };
  if (diff < WEEK) return { type: TYPE_DAY, diff: Math.floor(diff / DAY) };

  return { type: TYPE_WEEK, diff: Math.floor(diff / WEEK) };
}

export function getDateDiffText(fromDate, toDate) {
  const { type, diff } = dateDiff(fromDate, toDate);

  switch (type) {
    case TYPE_SECOND:
      return `${diff}초 전`;
    case TYPE_MINUTE:
      return `${diff}분 전`;
    case TYPE_HOUR:
      return `${diff}시간 전`;
    case TYPE_DAY:
      return `${diff}일 전`;
    default:
      return `${diff}주 전`;
  }
}
