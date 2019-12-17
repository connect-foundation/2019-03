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

function dateDiff(fromDate, toDate) {
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

function getDateDiffText(fromDate, toDate) {
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

export { getDateDiffText };
