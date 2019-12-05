import React, { useEffect, useReducer } from 'react';
import Icon from '../../../components/Icon';
import SearchToolTip from './SearchToolTip';
import { useFetch } from '../../../hooks';
import { searchQuery } from '../queries';
import { SearchWrapper, Input } from './styles';

const searchResultsRandomSort = results => {
  return results.sort(() => {
    return Math.random() - Math.random();
  });
};

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
  const { state, dispatch, fetchData } = useFetch();
  const { loading, data, error } = state;

  const clickClear = () => {
    searchDispatch({ type: 'CLEAR' });
  };

  const onChange = e => {
    searchDispatch({ type: 'CHANGE_INPUT', value: e.target.value });
    if (e.target.value === '') {
      searchDispatch({ type: 'CLOSE_TOOLTIP' });
      return;
    }

    fetchData(searchQuery(e.target.value));
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
      <Input value={searchState.inputValue} onChange={onChange} />
      <SearchToolTip
        isVisible={searchState.isVisible}
        searchDispatch={searchDispatch}
        searchResults={searchState.searchResults}
      />
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
