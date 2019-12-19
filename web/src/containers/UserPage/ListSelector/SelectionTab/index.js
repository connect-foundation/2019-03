import React from 'react';

import { BorderTopLink, TabText } from './styles';

const SelectionTab = ({ children, isSelected, onClick }) => {
  return (
    <BorderTopLink isselected={isSelected} onClick={onClick}>
      <TabText isselected={isSelected}>{children}</TabText>
    </BorderTopLink>
  );
};

export default SelectionTab;
