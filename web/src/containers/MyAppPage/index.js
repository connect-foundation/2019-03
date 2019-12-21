import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { withCookies } from 'react-cookie';
import MyAppList from './MyAppList';

import { GET_CLIENT } from '../../queries';
import { MyAppListWrapper } from './styles';

const MyAppPage = ({ setItem, cookies }) => {
  const myInfo = cookies.get('myInfo');

  const { data, loading, error } = useQuery(GET_CLIENT, {
    variables: { id: myInfo.id },
  });

  useEffect(() => {
    setItem('내 어플리케이션');
    return () => setItem(null);
  }, [myInfo.id, setItem]);

  return (
    <MyAppListWrapper>
      <MyAppList data={data} loading={loading} error={error} />
    </MyAppListWrapper>
  );
};

export default withCookies(MyAppPage);
