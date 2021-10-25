import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const SIGN_UP = "SIGN_UP";
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

const signUp = createAction(SIGN_UP);
const logIn = createAction(LOG_IN, user => ({ user }));
const logOut = createAction(LOG_OUT);

const initialState = {
  user: null,
  isLoggedIn: false,
  emailValidation: false,
  Error: "",
};

export const signUpAPI = user => {
  return function (dispatch, getState, { history }) {
    console.log(user);
  };
};

export const logInAPI = user => {
  return function (dispatch, getState, { history }) {
    console.log(user);
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
    console.log("getUserAPI");
  };
};

export default handleActions({
  [SIGN_UP]: (state, action) =>
    produce(state, draft => {
      console.log(action);
    }),
  [LOG_IN]: (state, action) =>
    produce(state, draft => {
      draft.user = action.payload.user;
      draft.isLoggedIn = true;
    }),
  [LOG_OUT]: (state, action) =>
    produce(state, draft => {
      draft.user = null;
      draft.isLoggedIn = false;
    }),
});
