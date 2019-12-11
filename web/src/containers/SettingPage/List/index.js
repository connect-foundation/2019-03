import React from 'react';
import Item from './Item';
import ListWrapper from './ListWrapper';

function List({ match, focusedItem, pageList }) {
  return (
    <ListWrapper>
      {pageList.map(({ title, url }) => (
        <Item
          title={title}
          url={`${match.path}/${url}`}
          isFocused={focusedItem === title}
        />
      ))}
    </ListWrapper>
  );
}

export default List;
