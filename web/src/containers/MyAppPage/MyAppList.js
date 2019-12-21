import React from 'react';
import MyApplication from './MyApplication';
import { MyAppNoResult } from './styles';
import Error from '../../components/Error';

const ApplicationList = ({ data, loading, error }) => {
  let myApp;
  if (loading) myApp = <div>로딩중</div>;
  if (error) myApp = <Error />;
  if (data) {
    if (data.client.length === 0)
      myApp = <MyAppNoResult>등록된 앱이 없습니다.</MyAppNoResult>;
    else {
      myApp = data.client.map((result, index) => {
        return <MyApplication key={result.appName + index} result={result} />;
      });
    }
  }

  return <>{myApp}</>;
};

export default ApplicationList;
