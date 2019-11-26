import React from 'react';
import SearchResult from './SearchResult';

const SearchResultList = props => {
  const { searchResults } = props;
  const renderedSearchResults = searchResults.map((result, index, array) => {
    return (
      <SearchResult
        key={index}
        result={result}
        isLast={index === array.length - 1}
      />
    );
  });
  return <div>{renderedSearchResults}</div>;
};

export default SearchResultList;
