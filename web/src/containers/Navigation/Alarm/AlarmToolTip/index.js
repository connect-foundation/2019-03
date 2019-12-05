import React from 'react';
import { AlarmToolTipWrapper, AlarmResultList, AlarmNoResult } from './styles';

const AlarmToolTip = ({ isVisible, setIsVisible, data, loading, error }) => {
  const clickClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;
  if (loading) {
    return (
      <AlarmToolTipWrapper arrowStyle={{ left: '85%' }} onClick={clickClose}>
        <AlarmNoResult>
          <span>로딩중.</span>
        </AlarmNoResult>
      </AlarmToolTipWrapper>
    );
  }
  if (error) {
    return (
      <AlarmToolTipWrapper arrowStyle={{ left: '85%' }} onClick={clickClose}>
        <AlarmNoResult>
          <span>에러가 발생했습니다.</span>
        </AlarmNoResult>
      </AlarmToolTipWrapper>
    );
  }
  const { log } = data;
  if (log.length === 0) {
    return (
      <AlarmToolTipWrapper arrowStyle={{ left: '85%' }} onClick={clickClose}>
        <AlarmNoResult>
          <span>새로운 알림이 없습니다.</span>
        </AlarmNoResult>
      </AlarmToolTipWrapper>
    );
  }
  return (
    <AlarmToolTipWrapper arrowStyle={{ left: '85%' }} onClick={clickClose}>
      <AlarmResultList alarmResults={log} />
    </AlarmToolTipWrapper>
  );
};

export default AlarmToolTip;
