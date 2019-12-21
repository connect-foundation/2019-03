import React from 'react';
import { AlarmNoResult } from './styles';
import AlarmResultList from './AlarmResultList';
import ToolTip from '../../../../components/ToolTip';

const BODY_MOVE_RANGE = '-50%';

const AlarmToolTip = ({ isVisible, setIsVisible, data, loading, error }) => {
  let content = '';
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
      resultList = (
        <AlarmResultList
          alarmResults={log}
          clickClose={clickClose}
          onClick={clickClose}
        />
      );
    }
  }

  const resultNoList = (
    <AlarmNoResult onClick={clickClose}>{content}</AlarmNoResult>
  );

  return (
    <ToolTip onClick={clickClose} bodyStyle={{ right: BODY_MOVE_RANGE }}>
      {resultList || resultNoList}
    </ToolTip>
  );
};

export default AlarmToolTip;
