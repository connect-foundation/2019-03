import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import List from './List';
import SettingPageWrapper from './SettingPageWrapper';

function SettingPage({ match, pageList }) {
  const [focusedItem, setFocusedItem] = useState(null);
  return (
    <SettingPageWrapper>
      <List match={match} focusedItem={focusedItem} pageList={pageList} />
      {pageList.map(({ url, PageComponent }) => (
        <Route
          key={url}
          exact
          path={`${match.path}/${url}`}
          component={props => (
            <PageComponent
              {...props}
              setItem={setFocusedItem}
            />
          )}
        />
      ))}
      <ToastContainer
        position={toast.POSITION.BOTTOM_CENTER}
        transition={Slide}
      />
    </SettingPageWrapper>
  );
}

export default SettingPage;
