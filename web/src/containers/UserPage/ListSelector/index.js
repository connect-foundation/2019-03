import React from 'react';

import SelectionTab from './SelectionTab';
import ListSelectorWrapper from './ListSelectorWrapper';

const ListSelector = ({
  selectionTabState,
  onClickPostTab,
  onClickTaggedTab,
}) => {
  const isPostSelected = Number(selectionTabState === '게시물');
  const isTaggedSelected = Number(selectionTabState === '태그됨');
  return (
    <ListSelectorWrapper>
      <SelectionTab isSelected={isPostSelected} onClick={onClickPostTab}>
        게시물
      </SelectionTab>
      <SelectionTab isSelected={isTaggedSelected} onClick={onClickTaggedTab}>
        태그됨
      </SelectionTab>
    </ListSelectorWrapper>
  );
};

export default ListSelector;
