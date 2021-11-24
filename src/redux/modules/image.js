/* eslint-disable */

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_PROFILE = "SET_PROFILE";
const ADD_PROFILE = "ADD_PROFILE";

const setProfile = createAction(SET_PROFILE, (profile_list) => ({
  profile_list,
}));
const addProfile = createAction(ADD_PROFILE, (profile) => ({ profile }));

const initialState = {
  list: [],
};

export default handleActions(
  {
    [SET_PROFILE]: (state, action) => produce(state, (draft) => {}),
    [ADD_PROFILE]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setProfile,
  addProfile,
};

export { actionCreators };
