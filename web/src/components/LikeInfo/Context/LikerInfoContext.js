import React, { useReducer, useContext, createContext } from 'react';

export const INCREASE_LIKE = 0;
export const DECREASE_LIKE = 1;

const likerInfoReducer = (state, action) => {
  const { type, myInfo } = action;

  let { likerCount } = state;
  let { username } = state;

  switch (type) {
    case INCREASE_LIKE:
      likerCount += 1;
      if (likerCount === 1) username = myInfo.username;
      return {
        ...state,
        likerCount,
        username,
      };
    case DECREASE_LIKE:
      likerCount -= 1;
      return {
        ...state,
        likerCount,
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
