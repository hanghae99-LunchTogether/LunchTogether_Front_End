import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const GET_PROFILE = "GET_PROFILE";
const EDIT_PROFILE = "EDIT_PROFILE";

const getProfile = createAction(GET_PROFILE, user => ({ user }));

const initialState = {
  user: null,
};

const getProfileAPI = userId => {
  return function (dispatch, getState, { history }) {
    apis.getProfile(userId).then(res => {
      const user = res.data.data[0];
      dispatch(getProfile(user));
    });
  };
};

export default handleActions(
  {
    [GET_PROFILE]: (state, action) =>
      produce(state, draft => {
        draft.user = action.payload.user;
      }),
  },
  initialState
);

const profileActions = {
  getProfileAPI,
};

export { profileActions };
