const INIT_STATE = {
  isServerError: false,
  isAuth: true,
  validities: {
    username: true,
    password: true,
  },
};
const RESET_VALIDATION_MESSAGE = 0;
const SET_SIGNIN_INPUT_VALIDATION = 1;
const SET_SERVER_ERROR = 2;
const SET_AUTH_ERROR = 3;

function isInitState({ isServerError, isAuth, validities }) {
  if (isServerError) return false;
  if (!isAuth) return false;

  const { username, password } = validities;
  if (!username) return false;
  if (!password) return false;

  return true;
}

function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case RESET_VALIDATION_MESSAGE:
      return isInitState(state) ? state : { ...INIT_STATE };
    case SET_SIGNIN_INPUT_VALIDATION:
      return {
        ...state,
        validities: action.validities,
      };
    case SET_SERVER_ERROR:
      return {
        ...state,
        isServerError: true,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
}

export default reducer;
export {
  INIT_STATE,
  RESET_VALIDATION_MESSAGE,
  SET_AUTH_ERROR,
  SET_SIGNIN_INPUT_VALIDATION,
  SET_SERVER_ERROR,
};
