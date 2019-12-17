import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import { SEARCH } from '../../../../queries';
import { SearchNoResult } from './styles';
import SearchResultList from './SearchResultList';
import Spinner from '../../../../components/Spinner';
import ToolTip from '../../../../components/ToolTip';

const ARROW_MOVE_RANGE = '50%';
const BODY_MOVE_RANGE = '-15%';

const SearchToolTip = ({ inputValue, clickClear }) => {
  const [search, { data }] = useLazyQuery(SEARCH);

  useEffect(() => {
    search({ variables: { value: inputValue } });
  }, [inputValue, search]);
  if (!data)
    return (
      <ToolTip
        onClick={clickClear}
        arrowStyle={{ left: ARROW_MOVE_RANGE }}
        bodyStyle={{ left: BODY_MOVE_RANGE }}
      >
        <SearchNoResult>
          <Spinner />
        </SearchNoResult>
      </ToolTip>
    );
  const { search: searchResults } = data;
  if (searchResults.length === 0) {
    return (
      <ToolTip
        onClick={clickClear}
        arrowStyle={{ left: ARROW_MOVE_RANGE }}
        bodyStyle={{ left: BODY_MOVE_RANGE }}
      >
        <SearchNoResult>
          <span>검색 결과가 없습니다.</span>
        </SearchNoResult>
      </ToolTip>
    );
  }
  return (
    <ToolTip
      onClick={clickClear}
      arrowStyle={{ left: ARROW_MOVE_RANGE }}
      bodyStyle={{ left: BODY_MOVE_RANGE }}
    >
      <SearchResultList searchResults={searchResults} clickClose={clickClear} />
    </ToolTip>
  );
};

export default SearchToolTip;
