import React from 'react';
import { SearchToolTipWrapper } from './styles';
import SearchResultList from './SearchResultList';

const SearchToolTip = ({ isVisible, setIsVisible, searchResults }) => {
  const clickClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <SearchToolTipWrapper onClick={clickClose}>
      <SearchResultList searchResults={searchResults} />
    </SearchToolTipWrapper>
  );
};

export default SearchToolTip;
