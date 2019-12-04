import React, { useState } from 'react';
import { relative } from 'path';
import Icon from '../../../components/Icon';
import AlarmToolTip from './AlarmToolTip';
import { useFetch } from '../../../hooks';
import { alarmQuery } from '../query';

const Alarm = ({ myInfo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { state, dispatch, fetchData } = useFetch();
  const { loading, data, error } = state;

  const clickAlarmIcon = async () => {
    if (isVisible) {
      setIsVisible(false);
      return;
    }
    await fetchData(alarmQuery(myInfo.id));
    setIsVisible(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Icon
        ratio={6}
        posX={-130}
        posY={-246}
        style={{ marginTop: '5px' }}
        onClick={clickAlarmIcon}
      />
      <AlarmToolTip
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        alarmResults={data && data.log}
      />
    </div>
  );
};

export default Alarm;
