import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

// actions Type
const GET_PROFILE = "GET_PROFILE";
const UPDATE_PROFILE = "UPDATE_PROFILE";

// action creators
const getProfile = createAction(GET_PROFILE, (profile) => ({ profile }));
const updateProfile = createAction(UPDATE_PROFILE, (profile) => ({
  profile,
}));

//initialState
const initialState = {
  profile: {
    username: "username",
    password: "password",
    email: "email",
    nickname: "nickname",
    // imageUrl: "imageUrl",
    image: "/img/profile.png",
    mbti: "mbti",
    gender: "gender",
    location: "location",
    menu: "menu",
    company: "company",
    introduction: "introduction",
    // mannerStatus: "mannerStatus",
  },
};

//middleware
const getProfileAPI = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getProfile()
      .then((res) => {
        dispatch(getProfile(res.data.data.user[0]));
        console.log("get응답", res.data.data.user[0]);
      })
      .catch((res) => {
        console.log(res.response);
      });
  };
};

const updateProfileAPI = (profileInfo) => {
  return function (dispatch, getState, { history }) {
    apis
      .updateProfile(profileInfo)
      .then((res) => {
        console.log("응답", res);
        dispatch(updateProfile(res));
        // history.push("/profile");
      })
      .catch((res) => {
        console.log(res.response);
      });
  };
};

//reducer
export default handleActions(
  {
    [GET_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.profile = action.payload.profile;
      }),

    [UPDATE_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.profile = action.payload.profile;
      }),
  },
  initialState
);

//action creator export
const profileActions = {
  getProfileAPI,
  updateProfileAPI,
};

export { profileActions };
