import React, { useState, useCallback, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import _ from 'underscore';

import { SEARCH } from '../../../queries';
import Icon from '../../../components/Icon';
import SearchToolTip from './SearchToolTip';
import { SearchWrapper, Input } from './styles';

const Search = () => {
  const [isVisible, setVisibility] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [search, { data }] = useLazyQuery(SEARCH, {
    fetchPolicy: 'no-cache',
  });
  const searchAfterDebounce = useCallback(_.debounce(search, 300), []);

  const clickClear = () => {
    setVisibility(false);
    setInputValue('');
  };

  const changeInputValueHandler = ({ target }) => {
    const { value } = target;
    setInputValue(value);
    if (value === '') {
      setVisibility(false);
      return;
    }

    searchAfterDebounce({ variables: { value } });
  };

  useEffect(() => {
    if (data) {
      if (inputValue === '') {
        setVisibility(false);
        return;
      }
      setVisibility(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <SearchWrapper>
      {isVisible && <SearchToolTip data={data} clickClear={clickClear} />}
      <Input value={inputValue} onChange={changeInputValueHandler} />
      <Icon name="search" />
      <Icon name="clear" onClick={clickClear} />
    </SearchWrapper>
  );
};

export default Search;
