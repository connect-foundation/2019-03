import { useReducer, useEffect } from 'react';

function reducer(state, action) {
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

function useAsync() {
  const [state, dispatch] = useReducer(reducer, {
    loading: null,
    data: null,
    error: false,
  });

  const callback = query =>
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query }),
    });

  const fetchMutation = async (query, fn) => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await callback(query);
      const { data } = await response.json();
      dispatch({ type: 'SUCCESS', data });
      fn();
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  return [state, fetchMutation];
}

export default useAsync;

/**
 * honor code: https://react.vlpt.us/
 */
