import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const UPDATE_PROFILE = "UPDATE_PROFILE";

const updateProfile = createAction(UPDATE_PROFILE, (profile) => ({ profile }));

const initialState = {
  profile: null,
};

export const updateProfileAPI = (profile) => {
  return function (dispatch, getState, { history }) {
    console.log(profile);

    apis
      .updateProfile(profile)
      .then((res) => {
        console.log(res);
        dispatch(updateProfile(res.data.data.user));
      })
      .catch((res) => {
        console.log(res.response);
      });
  };
};

export default handleActions(
  {
    [UPDATE_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.profile = action.payload.profile;
      }),
  },
  initialState
);

const profileActions = {
  updateProfileAPI,
};

export { profileActions };
