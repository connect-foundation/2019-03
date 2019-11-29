import React, { useReducer, useContext, createContext } from 'react';

export const INCREASE_LIKE = 0;
export const DECREASE_LIKE = 1;

const likerInfoReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case INCREASE_LIKE:
      return {
        ...state,
        likerCount: state.likerCount + 1,
      };
    case DECREASE_LIKE:
      return {
        ...state,
        likerCount: state.likerCount - 1,
      };
    default:
      return state;
  }
};

const LikerInfoStateContext = createContext(null);
const LikerInfoDispatchContext = createContext(null);

export const LikerInfoProvider = ({ likerInfo, children }) => {
  const [state, dispatch] = useReducer(likerInfoReducer, likerInfo);

  return (
    <LikerInfoStateContext.Provider value={state}>
      <LikerInfoDispatchContext.Provider value={dispatch}>
        {children}
      </LikerInfoDispatchContext.Provider>
    </LikerInfoStateContext.Provider>
  );
};

export const useLikerInfoState = () => useContext(LikerInfoStateContext);
export const useLikerInfoDispatch = () => useContext(LikerInfoDispatchContext);
