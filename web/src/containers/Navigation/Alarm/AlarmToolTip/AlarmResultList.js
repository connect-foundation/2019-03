import React from 'react';
import AlarmResult from './AlarmResult';

const AlarmResultList = ({ alarmResults, clickClose }) => {
  const renderedAlarmResults = alarmResults.map((result, index, array) => {
    return (
      <AlarmResult
        key={result.id}
        result={result}
        isLast={index === array.length - 1}
        clickClose={clickClose}
      />
    );
  });
  return <div>{renderedAlarmResults}</div>;
};

export default AlarmResultList;
