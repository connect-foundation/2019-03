import React from 'react';
import SearchToolTipWrapper from './SearchToolTipWrapper';
import SearchResultList from './SearchResultList';

const SearchToolTip = ({ isVisible, searchResults }) => {
  if (!isVisible) return null;
  return (
    <SearchToolTipWrapper>
      <SearchResultList searchResults={searchResults} />
    </SearchToolTipWrapper>
  );
};

export default SearchToolTip;
