import { LOGIN } from "./constant";

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN.LOGIN_REQUEST_GET:
    case LOGIN.LOGOUT_REQUEST_GET:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOGIN.LOGIN_SUCCESS_GET:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      };

    case LOGIN.LOGIN_FAILURE_GET:
    case LOGIN.LOGOUT_FAILURE_GET:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGIN.LOGOUT_SUCCESS_GET:
      return {
        ...initialState,
      };

    case LOGIN.CLEAR_AUTH_ERROR_GET:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export { loginReducer };