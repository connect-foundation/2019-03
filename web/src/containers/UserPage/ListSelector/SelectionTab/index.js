import React from 'react';

import { BorderTopLink, TabText } from './styles';

const SelectionTab = ({ children, username, isSelected }) => {
  return (
    <BorderTopLink to={`/${username}`} isSelected={isSelected}>
      <TabText isSelected={isSelected}>{children}</TabText>
    </BorderTopLink>
  );
};

export default SelectionTab;
