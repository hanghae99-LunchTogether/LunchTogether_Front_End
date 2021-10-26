import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

//actions Type
const SET_PROFILE = "SET_PROFILE";
const UPDATE_PROFILE = "UPDATE_PROFILE";

//action creator

//initialState
const initialState = {
    // image:,
    nickname:"닉네임",
    job:"직업",
    mbti:"MBTI",
    introduction:"자기소개",

};

//middleware
const updateProfileAPI = () => {
    return function (dispatch, getState, { history }) {

    };
  };

//reducer

//action creator export
const profileActions = {};

export { profileActions };
