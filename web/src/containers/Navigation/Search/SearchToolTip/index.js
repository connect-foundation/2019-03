import React from 'react';
import { SearchToolTipWrapper, SearchNoResult } from './styles';
import SearchResultList from './SearchResultList';

const SearchToolTip = ({ isVisible, searchDispatch, searchResults }) => {
  const clickClose = () => {
    searchDispatch({ type: 'CLOSE_TOOLTIP' });
  };

  if (!isVisible) return null;
  if (searchResults.length === 0) {
    return (
      <SearchToolTipWrapper onClick={clickClose}>
        <SearchNoResult>
          <span>검색 결과가 없습니다.</span>
        </SearchNoResult>
      </SearchToolTipWrapper>
    );
  }
  return (
    <SearchToolTipWrapper onClick={clickClose}>
      <SearchResultList searchResults={searchResults} />
    </SearchToolTipWrapper>
  );
};

export default SearchToolTip;
