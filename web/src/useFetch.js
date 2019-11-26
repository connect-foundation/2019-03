import { useReducer, useEffect } from 'react';

function defaultReducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(query, reducer = defaultReducer, deps = [], skip = false) {
  reducer = reducer || defaultReducer;
  const [state, dispatch] = useReducer(reducer, {
    loading: null,
    data: null,
    error: false,
  });

  const callback = () =>
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await callback();
      const { data } = await response.json();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint 설정을 다음 줄에서만 비활성화
    // eslint-disable-next-line
  }, deps);

  return [state, dispatch, fetchData];
}

export default useAsync;

/**
 * honor code: https://react.vlpt.us/
 */
