import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { withCookies } from 'react-cookie';

import Icon from '../../../components/Icon';
import AlarmToolTip from './AlarmToolTip';
import { AlarmToolTipWrapper } from './style';
import { GET_LOGS } from '../../../queries';

const Alarm = ({ cookies }) => {
  const myInfo = cookies.get('myInfo');
  console.log(myInfo);
  const [isVisible, setIsVisible] = useState(false);

  const [getLog, { data, loading, error }] = useLazyQuery(GET_LOGS, {
    fetchPolicy: 'network-only',
  });

  const clickAlarmIcon = () => {
    if (isVisible) {
      setIsVisible(false);
      return;
    }
    getLog({ variables: { id: myInfo.id } });
    setIsVisible(true);
  };
  return (
    <div>
      <Icon
        name="emptyhHeart"
        onClick={clickAlarmIcon}
        style={{ marginTop: '5px', marginRight: '10px' }}
      />
      <AlarmToolTipWrapper>
        <AlarmToolTip
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          data={data}
          loading={loading}
          error={error}
        />
      </AlarmToolTipWrapper>
    </div>
  );
};

export default withCookies(Alarm);
