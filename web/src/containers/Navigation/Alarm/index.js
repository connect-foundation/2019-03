import React from 'react';
import Icon from '../../../components/Icon';
import AlarmToolTipWrapper from './AlarmToolTipWrapper';
import AlarmResultList from './AlarmResultList';

const SearchToolTip = () => {
  const alarmResults = ['hi'];
  return (
    <>
      <Icon ratio={6} posX={-130} posY={-246} style={{ marginTop: '1px' }} />
      <AlarmToolTipWrapper arrowStyle={{ left: '85%' }}>
        <AlarmResultList alarmResults={alarmResults} />
      </AlarmToolTipWrapper>
    </>
  );
};

export default SearchToolTip;
