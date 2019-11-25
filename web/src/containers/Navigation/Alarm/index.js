import React from 'react';
import AlarmToolTipWrapper from './AlarmToolTipWrapper';
import AlarmResult from './AlarmToolTip/AlarmResult';

const SearchToolTip = () => {
  return (
    <AlarmToolTipWrapper arrowStyle={{ left: '85%' }}>
      <AlarmResult />
    </AlarmToolTipWrapper>
  );
};

export default SearchToolTip;
