import React from 'react';
import SearchResult from './SearchResult';

const SearchResultList = props => {
  const { searchResults, clickClose } = props;
  const renderedSearchResults = searchResults.map((result, index, array) => {
    return (
      <SearchResult
        key={result.id}
        result={result}
        isLast={index === array.length - 1}
        clickClose={clickClose}
      />
    );
  });
  return <div>{renderedSearchResults}</div>;
};

export default SearchResultList;
