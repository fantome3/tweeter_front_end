import AuthService from '../../conf/auth.service';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
  } from "./types";

export const register = (user) => (dispatch) => {
    return AuthService.register(user).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
      }
    );
};

export const login = (user) => (dispatch) => {
    return AuthService.login(user).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      error => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject(message);
      }
    );
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  //return { type: LOGOUT };
  dispatch({
    type: LOGOUT,
  });
};