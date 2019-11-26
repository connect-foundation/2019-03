import React, { useState } from 'react';
import Icon from '../../../components/Icon';
import AlarmToolTip from './AlarmToolTip';
import useFetch from '../../../useFetch';
import { alarmQuery } from '../../../query/navigationQuery';

const Alarm = ({ myInfo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [state, dispatch, fetchData] = useFetch(
    alarmQuery(myInfo.username),
    [],
    true,
  );
  const { loading, data, error } = state;

  const clickAlarmIcon = async () => {
    if (isVisible) {
      setIsVisible(false);
      return;
    }
    await fetchData();
    setIsVisible(true);
  };

  return (
    <>
      <Icon
        ratio={6}
        posX={-130}
        posY={-246}
        style={{ marginTop: '1px' }}
        onClick={clickAlarmIcon}
      />
      <AlarmToolTip isVisible={isVisible} alarmResults={data && data.log} />
    </>
  );
};

export default Alarm;
