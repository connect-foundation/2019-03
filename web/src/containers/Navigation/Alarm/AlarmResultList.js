import React from 'react';
import AlarmResult from './AlarmToolTip/AlarmResult';

const AlarmResultList = ({ alarmResults }) => {
  console.log(alarmResults);
  const renderedAlarmResults = alarmResults.map((result, index) => {
    return <AlarmResult key={index} result={result} />;
  });
  return <div>{renderedAlarmResults}</div>;
};

export default AlarmResultList;
