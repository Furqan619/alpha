import { LOGIN } from "./constant";

const loginRequest = () => ({
  type: LOGIN.LOGIN_REQUEST_GET,
});

const loginSuccess = (payload) => ({
  type: LOGIN.LOGIN_SUCCESS_GET,
  payload,
});

const loginFailure = (payload) => ({
  type: LOGIN.LOGIN_FAILURE_GET,
  payload,
});

const logoutRequest = () => ({
  type: LOGIN.LOGOUT_REQUEST_GET,
});

const logoutSuccess = () => ({
  type: LOGIN.LOGOUT_SUCCESS_GET,
});

const logoutFailure = (payload) => ({
  type: LOGIN.LOGOUT_FAILURE_GET,
  payload,
});

const clearAuthError = () => ({
  type: LOGIN.CLEAR_AUTH_ERROR_GET,
});

export {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  clearAuthError,
};