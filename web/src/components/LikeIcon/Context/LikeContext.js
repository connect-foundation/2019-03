import React, { useReducer, useContext, createContext } from 'react';

export const TOGGLE_LIKE_ICON = 'TOGGLE_LIKE_ICON';
export const POS_X_OF_HEART = -130;
export const POS_Y_OF_EMPTY_HEART = -245;
export const POS_Y_OF_FILL_HEART = -375;

const initialState = POS_Y_OF_EMPTY_HEART;
const likeReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_LIKE_ICON:
      return state === POS_Y_OF_EMPTY_HEART
        ? POS_Y_OF_FILL_HEART
        : POS_Y_OF_EMPTY_HEART;
    default:
      return state;
  }
};

const LikeStateContext = createContext(null);
const LikeDispatchContext = createContext(null);

export const LikeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(likeReducer, initialState);

  return (
    <LikeStateContext.Provider value={state}>
      <LikeDispatchContext.Provider value={dispatch}>
        {children}
      </LikeDispatchContext.Provider>
    </LikeStateContext.Provider>
  );
};

export const useLikeState = () => useContext(LikeStateContext);
export const useLikeDispatch = () => useContext(LikeDispatchContext);
