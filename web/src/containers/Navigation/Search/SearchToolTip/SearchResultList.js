import React from 'react';
import SearchResult from './SearchResult';

const SearchResultList = props => {
  const { searchResults } = props;
  const renderedSearchResults = searchResults.map((result, index) => {
    return <SearchResult key={index} result={result} />;
  });
  return <div>{renderedSearchResults}</div>;
};

export default SearchResultList;
