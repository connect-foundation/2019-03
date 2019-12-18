const INIT_STATE = {
  isServerError: false,
  isDuplicated: false,
  validities: {
    username: true,
    password: true,
    name: true,
    email: true,
    cellPhone: true,
  },
};
const RESET_VALIDATION_MESSAGE = 0;
const SET_SIGNUP_INPUT_VALIDATION = 1;
const SET_SERVER_ERROR = 2;
const SET_DUPLICATED_ERROR = 3;

function isInitState({ isServerError, isDuplicated, validities }) {
  if (isServerError) return false;
  if (isDuplicated) return false;

  const { username, password, name, email, cellPhone } = validities;
  if (!username) return false;
  if (!password) return false;
  if (!name) return false;
  if (!email) return false;
  if (!cellPhone) return false;

  return true;
}

function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case RESET_VALIDATION_MESSAGE:
      return isInitState(state) ? state : { ...INIT_STATE };
    case SET_SIGNUP_INPUT_VALIDATION:
      return {
        ...state,
        validities: action.validities,
      };
    case SET_SERVER_ERROR:
      return {
        ...state,
        isServerError: true,
      };
    case SET_DUPLICATED_ERROR:
      return {
        ...state,
        isDuplicated: true,
      };
    default:
      return state;
  }
}

export default reducer;
export {
  INIT_STATE,
  RESET_VALIDATION_MESSAGE,
  SET_DUPLICATED_ERROR,
  SET_SIGNUP_INPUT_VALIDATION,
  SET_SERVER_ERROR,
};
