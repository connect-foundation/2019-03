import React, { useReducer, useContext, createContext } from 'react';

export const INCREASE_LIKE = 0;
export const DECREASE_LIKE = 1;

const likerListReducer = (state, action) => {
  const { type, liker } = action;
  switch (type) {
    case INCREASE_LIKE:
      return [...state, liker];
    case DECREASE_LIKE:
      return state.filter(_liker => _liker.username !== liker.username);
    default:
      return state;
  }
};

const LikerListStateContext = createContext(null);
const LikerListDispatchContext = createContext(null);

export const LikerListProvider = ({ likerList, children }) => {
  const [state, dispatch] = useReducer(likerListReducer, likerList);

  return (
    <LikerListStateContext.Provider value={state}>
      <LikerListDispatchContext.Provider value={dispatch}>
        {children}
      </LikerListDispatchContext.Provider>
    </LikerListStateContext.Provider>
  );
};

LikerListProvider.defaultProps = {
  likerList: [],
};

export const useLikerListState = () => useContext(LikerListStateContext);
export const useLikerListDispatch = () => useContext(LikerListDispatchContext);
