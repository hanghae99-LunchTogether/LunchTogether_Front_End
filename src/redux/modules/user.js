/* eslint-disable */

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const SIGN_UP = "SIGN_UP";
const SET_USER = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_ERROR = "SET_ERROR";

const signUp = createAction(SIGN_UP);
const setUser = createAction(SET_USER, user => ({ user }));
const logOut = createAction(LOG_OUT);
const setError = createAction(SET_ERROR, error => ({ error }));

const initialState = {
  user: null,
  isLoggedIn: false,
  emailValidation: false,
  error: "",
};

export const signUpAPI = user => {
  return function (dispatch, getState, { history }) {
    console.log(user);
    apis
      .registerUser(user)
      .then(res => {
        console.log(res);
        history.push("/login");
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};

export const logInAPI = user => {
  return function (dispatch, getState, { history }) {
    apis
      .logIn(user)
      .then(res => {
        const token = res.data.token;
        const user = res.data.data.user;
        localStorage.setItem("token", token);
        dispatch(setUser(user));
        history.push("/");
      })
      .catch(err => {
        console.log(err.response);
        dispatch(setError(err.response.data.msg));
      });
  };
};

export const logOutAPI = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    dispatch(logOut());
    history.replace("/");
  };
};

export const getUserAPI = () => {
  return function (dispatch, getState, { history }) {
    apis.getUser().then(res => {
      const user = res.data.data.user[0];
      dispatch(setUser(user));
    });
  };
};

export default handleActions(
  {
    [SIGN_UP]: (state, action) =>
      produce(state, draft => {
        console.log(action);
      }),
    [SET_USER]: (state, action) =>
      produce(state, draft => {
        draft.user = action.payload.user;
        draft.isLoggedIn = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, draft => {
        draft.user = null;
        draft.isLoggedIn = false;
      }),
    [SET_ERROR]: (state, action) =>
      produce(state, draft => {
        draft.error = action.payload.error;
      }),
  },
  initialState
);

const userActions = {
  signUpAPI,
  logInAPI,
  logOutAPI,
  getUserAPI,
};

export { userActions };
