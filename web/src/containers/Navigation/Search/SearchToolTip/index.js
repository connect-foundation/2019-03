import React, { useState, useEffect } from 'react';

import { SearchNoResult } from './styles';
import SearchResultList from './SearchResultList';
import Spinner from '../../../../components/Spinner';
import ToolTip from '../../../../components/ToolTip';

const ARROW_MOVE_RANGE = '50%';
const BODY_MOVE_RANGE = '-15%';

const SearchToolTip = ({ data, clickClear }) => {
  const [content, setContent] = useState(
    <SearchNoResult>
      <Spinner />
    </SearchNoResult>,
  );

  useEffect(() => {
    if (!data) {
      return;
    }

    const { search: searchResults } = data;
    if (searchResults.length === 0) {
      setContent(
        <SearchNoResult>
          <span>검색 결과가 없습니다.</span>
        </SearchNoResult>,
      );
      return;
    }
    setContent(
      <SearchResultList
        searchResults={searchResults}
        clickClose={clickClear}
      />,
    );
  }, [clickClear, data]);

  return (
    <ToolTip
      onClick={clickClear}
      arrowStyle={{ left: ARROW_MOVE_RANGE }}
      bodyStyle={{ left: BODY_MOVE_RANGE }}
    >
      {content}
    </ToolTip>
  );
};

export default SearchToolTip;
