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

const loginThunk =
  (email, password) =>
  async (dispatch) => {
    dispatch(loginRequest());

    try {
      await setPersistence(
        auth,
        browserSessionPersistence
      );

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      sessionStorage.setItem(
        "activeSession",
        "true"
      );

      dispatch(
        loginSuccess(userCredential.user)
      );

      // show success message
      try {
        message.success(MESSAGES.LOGIN_SUCCESS || 'Logged in successfully');
      } catch (e) {
        message.success('Logged in successfully');
      }
      return userCredential.user;

    } catch (error) {
      dispatch(loginFailure(error.message));
      try {
        message.error(MESSAGES.LOGIN_FAILURE || error.message);
      } catch (e) {
        message.error(error.message);
      }

      throw error;
    }
  };

const logoutThunk =
  () =>
  async (dispatch) => {
    dispatch(logoutRequest());

    try {
      await signOut(auth);

      sessionStorage.removeItem(
        "activeSession"
      );

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
}