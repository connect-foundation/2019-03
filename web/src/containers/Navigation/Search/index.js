import React, { useState, useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import _ from 'underscore';

import { SEARCH } from '../../../queries';
import Icon from '../../../components/Icon';
import SearchToolTip from './SearchToolTip';
import { SearchWrapper, Input } from './styles';

const Search = () => {
  const [isVisible, setVisibility] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [search, { data }] = useLazyQuery(SEARCH, { fetchPolicy: 'no-cache' });
  const searchAfterDebounce = useCallback(_.debounce(search, 300), []);

  const clickClear = () => {
    setVisibility(false);
    setInputValue('');
  };

  const changeInputValueHandler = ({ target }) => {
    const { value } = target;
    setVisibility(true);
    setInputValue(value);
    if (value === '') {
      setVisibility(false);
    }

    searchAfterDebounce({ variables: { value } });
  };

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
