import React from 'react';
import AlarmToolTipWrapper from './AlarmToolTipWrapper';
import AlarmResultList from './AlarmResultList';
import AlarmResultWrapper from './AlarmResult/AlarmResultWrapper';

const AalrmToolTip = ({ isVisible, alarmResults }) => {
  if (!isVisible) return null;
  if (alarmResults.length === 0) {
    return (
      <AlarmToolTipWrapper arrowStyle={{ left: '86%' }}>
        <AlarmResultWrapper>새로운 알림이 없습니다.</AlarmResultWrapper>
      </AlarmToolTipWrapper>
    );
  }
  return (
    <AlarmToolTipWrapper arrowStyle={{ left: '86%' }}>
      <AlarmResultList alarmResults={alarmResults} />
    </AlarmToolTipWrapper>
  );
};

export default AalrmToolTip;
