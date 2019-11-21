import React from 'react';
import SearchToolTipWrapper from './SearchToolTipWrapper';
import SearchResultList from './SearchResultList';

const SearchToolTip = () => {
  const searchResults = [
    { type: 'user', username: '_so__02', name: '정소영', profileImage: '' },
    { type: 'hashtag', name: '정소영' },
  ];

  return (
    <SearchToolTipWrapper>
      <SearchResultList searchResults={searchResults} />
    </SearchToolTipWrapper>
  );
};

export default SearchToolTip;
