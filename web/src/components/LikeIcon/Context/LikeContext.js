import React, { useReducer, useContext, createContext } from 'react';

export const TOGGLE_LIKE_ICON = 0;
export const POS_X_OF_HEART = -130;
export const POS_Y_OF_EMPTY_HEART = -245;
export const POS_Y_OF_FILL_HEART = -375;

const likeReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_LIKE_ICON:
      return !state;
    default:
      return state;
  }
};

const LikeStateContext = createContext(null);
const LikeDispatchContext = createContext(null);

export const LikeProvider = ({ isLike, children }) => {
  const [state, dispatch] = useReducer(likeReducer, isLike);

  return (
    <LikeStateContext.Provider value={state}>
      <LikeDispatchContext.Provider value={dispatch}>
        {children}
      </LikeDispatchContext.Provider>
    </LikeStateContext.Provider>
  );
};

LikeProvider.defaultProps = {
  isLike: false,
};

export const useLikeState = () => useContext(LikeStateContext);
export const useLikeDispatch = () => useContext(LikeDispatchContext);
