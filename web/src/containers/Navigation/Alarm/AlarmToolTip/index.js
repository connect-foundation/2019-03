import React from 'react';
import { AlarmToolTipWrapper, AlarmResultList, AlarmNoResult } from './styles';

const AalrmToolTip = ({ isVisible, setIsVisible, alarmResults }) => {
  const clickClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  if (alarmResults.length === 0) {
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
      <AlarmResultList alarmResults={alarmResults} />
    </AlarmToolTipWrapper>
  );
};

export default AalrmToolTip;
