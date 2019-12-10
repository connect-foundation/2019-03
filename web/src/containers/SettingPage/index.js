import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import List from './List';
import SettingPageWrapper from './SettingPageWrapper';

/**
 *
 * pageList = {
 *  url,
 *  PageComponent,
 * }
 */

function SettingPage({ match, myInfo, pageList }) {
  const [focusedItem, setFocusedItem] = useState(null);
  return (
    <SettingPageWrapper>
      <List match={match} focusedItem={focusedItem} pageList={pageList} />
      {pageList.map(({ url, PageComponent }) => (
        <Route
          exact
          path={`${match.path}/${url}`}
          component={props => (
            <PageComponent
              {...props}
              setItem={setFocusedItem}
              myInfo={myInfo}
            />
          )}
        />
      ))}
    </SettingPageWrapper>
  );
}

export default SettingPage;
