import React from 'react';
import { AlarmToolTipWrapper, AlarmResultList, AlarmNoResult } from './styles';

const ARROW_MOVEMENT = '85%';

const AlarmToolTip = ({ isVisible, setIsVisible, data, loading, error }) => {
  let content = false;
  let resultList = '';

  const clickClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  if (loading) {
    content = <span>로딩중.</span>;
  }
  if (error) {
    content = <span>에러가 발생했습니다.</span>;
  }
  if (data) {
    const { log } = data;
    if (log.length === 0) {
      content = <span>새로운 알림이 없습니다.</span>;
    } else {
      resultList = <AlarmResultList alarmResults={log} />;
    }
  }

  const resultNOList = <AlarmNoResult>{content}</AlarmNoResult>;

  return (
    <AlarmToolTipWrapper
      arrowStyle={{ left: ARROW_MOVEMENT }}
      onClick={clickClose}
    >
      {content && resultNOList}
      {resultList}
    </AlarmToolTipWrapper>
  );
};

export default AlarmToolTip;
