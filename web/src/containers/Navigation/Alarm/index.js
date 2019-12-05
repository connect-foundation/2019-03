import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import Icon from '../../../components/Icon';
import AlarmToolTip from './AlarmToolTip';
import { GET_LOG } from '../queries';

const Alarm = ({ myInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [getLog, { data, loading, error }] = useLazyQuery(GET_LOG);

  const clickAlarmIcon = () => {
    if (isVisible) {
      setIsVisible(false);
      return;
    }
    getLog({ variables: { id: myInfo.id } });
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
        data={data}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default Alarm;
