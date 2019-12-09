import React from 'react';

import { BorderTopLink, TabText } from './styles';

const SelectionTab = ({ children, username, isselected }) => {
  return (
    <BorderTopLink to={`/${username}`} isselected={isselected}>
      <TabText isselected={isselected}>{children}</TabText>
    </BorderTopLink>
  );
};

export default SelectionTab;
