import auth from "../../services/auth";
import {
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from "./action";
import { message } from 'antd';
import { MESSAGES } from '../../Routes/assets/utils';

const loginThunk = (email, password) =>
  async (dispatch) => {
    dispatch(loginRequest());
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem("activeSession", "true");
      dispatch(loginSuccess(userCredential.user));
      // show success message
      try {
        message.success(MESSAGES.LOGIN_SUCCESS || 'Logged in successfully');
      } catch (e) {
        message.success('Logged in successfully');
      }
      return userCredential.user;

    } catch (error) {
      dispatch(loginFailure(error.code));

      let errorMessage = MESSAGES.LOGIN_FAILURE || error.message;
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "User not found. Please check your email.";
          break;

        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;

        case "auth/invalid-credential":
          errorMessage = "Invalid email or password.";
          break;

        case "auth/too-many-requests":
          errorMessage = "Too many login attempts. Please try again later.";
          break;

        default:
          errorMessage = errorMessage || "Login failed. Please try again.";
      }

      try {
        message.error(errorMessage);
      } catch (e) {
        message.error(errorMessage);
      }

      throw error;
    }
  };

const logoutThunk = () =>
  async (dispatch) => {
    dispatch(logoutRequest());
    try {
      await signOut(auth);
      sessionStorage.removeItem("activeSession");
      dispatch(logoutSuccess());
      try {
        message.success(MESSAGES.LOGOUT_SUCCESS || 'Logged out');
      } catch (e) {
        message.success('Logged out');
      }
    } catch (error) {
      dispatch(logoutFailure(error.message));
      try {
        message.error(MESSAGES.LOGOUT_FAILURE || error.message);
      } catch (e) {
        message.error(error.message);
      }
    }
  };

export {
  loginThunk,
  logoutThunk,
};