import React, { useEffect, useReducer, useState } from 'react';
import Icon from '../../../components/Icon';
import SearchToolTip from './SearchToolTip';
import { useFetch } from '../../../hooks';
import { searchQuery } from '../queries';
import { SearchWrapper, Input } from './styles';

const initialState = {
  inputValue: '',
  isVisibl: false,
  searchResults: [],
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR':
      return initialState;
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputValue: action.value,
      };
    case 'CLOSE_TOOLTIP':
      return {
        ...state,
        isVisible: false,
      };
    case 'FINISH_SEARCH':
      return {
        ...state,
        isVisible: true,
        searchResults: action.results,
      };
    default:
      return {
        state,
      };
  }
};

const Search = () => {
  const [searchState, searchDispatch] = useReducer(searchReducer, initialState);
  const { state, fetchData } = useFetch();
  const { loading, data, error } = state;
  const [timer, setTimer] = useState('');

  const clickClear = () => {
    searchDispatch({ type: 'CLEAR' });
  };

  const onChange = e => {
    const { value } = e.target;
    searchDispatch({ type: 'CHANGE_INPUT', value });

    if (e.target.value === '') {
      searchDispatch({ type: 'CLOSE_TOOLTIP' });
      return;
    }

    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        fetchData(searchQuery(value));
      }, 100),
    );
  };

  useEffect(() => {
    if (loading === null || loading || error) {
      searchDispatch({ type: 'CLOSE_TOOLTIP' });
      return;
    }

    searchDispatch({ type: 'FINISH_SEARCH', results: data.search });
  }, [data, error, loading]);

  return (
    <SearchWrapper>
      <SearchToolTip
        isVisible={searchState.isVisible}
        searchDispatch={searchDispatch}
        searchResults={searchState.searchResults}
      />
      <Input value={searchState.inputValue} onChange={onChange} />
      <Icon
        ratio={10}
        posX={-260}
        posY={-625}
        style={{ marginTop: '2px', position: 'absolute' }}
      />
      <Icon
        ratio={10}
        posX={-390}
        posY={-625}
        onClick={clickClear}
        style={{ marginTop: '2px', zIndex: '200' }}
      />
    </SearchWrapper>
  );
};

export default Search;
