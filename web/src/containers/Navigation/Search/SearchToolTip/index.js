import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import { SEARCH } from '../../../../queries';
import { SearchToolTipWrapper, SearchNoResult } from './styles';
import SearchResultList from './SearchResultList';
import Spinner from '../../../../components/Spinner';

const SearchToolTip = ({ inputValue, clickClear }) => {
  const [search, { data }] = useLazyQuery(SEARCH);

  useEffect(() => {
    search({ variables: { value: inputValue } });
  }, [inputValue, search]);
  if (!data)
    return (
      <SearchToolTipWrapper onClick={clickClear}>
        <SearchNoResult>
          <Spinner />
        </SearchNoResult>
      </SearchToolTipWrapper>
    );
  const { search: searchResults } = data;
  if (searchResults.length === 0) {
    return (
      <SearchToolTipWrapper onClick={clickClear}>
        <SearchNoResult>
          <span>검색 결과가 없습니다.</span>
        </SearchNoResult>
      </SearchToolTipWrapper>
    );
  }
  return (
    <SearchToolTipWrapper onClick={clickClear}>
      <SearchResultList searchResults={searchResults} clickClose={clickClear} />
    </SearchToolTipWrapper>
  );
};

export default SearchToolTip;
