/* eslint-disable */

import { produce } from "immer";
import { create } from "lodash";
import { createAction, handleActions } from "redux-actions";

import { apis } from "../../shared/axios";

//action
const CREATE_LUNCH = "lunch/CREATE_LUNCH";
const UPDATE_LUNCH = "lunch/UPDATE_LUNCH";
const DELETE_LUNCH = "lunch/DELETE_LUNCH";

//action creater
const createLunch = createAction(CREATE_LUNCH, (lunch) => ({ lunch }));
const updateLunch = createAction(UPDATE_LUNCH, (lunch) => ({ lunch }));
const deleteLunch = createAction(DELETE_LUNCH, (lunch) => ({ lunch }));

//initialState
const initialState = {
  lunchList: [
    {
      lunchid: 0,
      title: "하이",
      content: "하이하이",
      date: "2021-01-01",
      location: "서울",
      membernum: 125,
    },
  ],
};

//Middleware
//런치추가
export const createLunchAPI = (_lunch) => {
  return function (dispatch, getState, { history }) {
    console.log(_lunch);
    apis
      .createLunch(_lunch)
      .then((res) => {
        console.log(res);
        dispatch(createLunch(_lunch));
        // history.push("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

//런치수정
export const updateLunchAPI = (post_id, _lunch) => {
  return function (dispatch, getState, { history }) {
    apis
      .updateLunch(post_id, _lunch)
      .then((res) => {
        console.log(res);
        // dispatch(updateLunch(post_id, _lunch))
        // history.push("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

//런치삭제
export const deleteLunchAPI = (_lunch) => {
  return function (dispatch, getState, { history }) {
    apis
      .deleteLunch(_lunch)
      .then((res) => {
        console.log(res);
        dispatch(deleteLunch(_lunch));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

//reducer
export default handleActions(
  {
    [CREATE_LUNCH]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.lunchList.push(action.payload.lunch);
        console.log(lunchList);
      }),

    [UPDATE_LUNCH]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        let idx = draft.lunchList.findIndex(
          (p) => p.lunchid === action.payload.post_id
        );

        draft.lunchList[idx] = { ...draft.lunchList[idx], ...action.payload._lunch };
      }),

    [DELETE_LUNCH]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.lunchList = draft.lunchList.filter(
          (p) => p.lunchid !== action.payload.lunchid
        );
      }),
  },
  initialState
);

//action creator export
const lunchActions = {
  createLunchAPI,
  updateLunchAPI,
  deleteLunchAPI,
};

export { lunchActions };
