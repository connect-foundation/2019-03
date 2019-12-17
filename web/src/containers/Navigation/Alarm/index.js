import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import Icon from '../../../components/Icon';
import AlarmToolTip from './AlarmToolTip';
import { GET_LOGS } from '../../../queries';

const Alarm = ({ myInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [getLog, { data, loading, error }] = useLazyQuery(GET_LOGS);

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
        name="emptyhHeart"
        onClick={clickAlarmIcon}
        style={{ marginTop: '5px', marginRight: '10px' }}
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
