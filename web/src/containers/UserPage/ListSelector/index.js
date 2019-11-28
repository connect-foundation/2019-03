import React from 'react';

import SelectionTab from './SelectionTab';
import { ListSelectorWrapper } from './styles';

const ListSelector = ({ username }) => {
  return (
    <ListSelectorWrapper>
      <SelectionTab username={username} isSelected>
        게시물
      </SelectionTab>
      <SelectionTab username={username} isSelected={false}>
        태그됨
      </SelectionTab>
    </ListSelectorWrapper>
  );
};

export default ListSelector;
