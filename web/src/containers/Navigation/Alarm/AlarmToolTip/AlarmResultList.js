import React from 'react';
import AlarmResult from './AlarmResult';

const AlarmResultList = ({ alarmResults }) => {
  const renderedAlarmResults = alarmResults.map((result, index) => {
    return <AlarmResult key={index} result={result} />;
  });
  return <div>{renderedAlarmResults}</div>;
};

export default AlarmResultList;
