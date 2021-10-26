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
const createLunch = createAction(CREATE_LUNCH, lunch => ({ lunch }));

//initialState
const initialState = {
  lunchList: [{
    lunchid: 0,
    title : '하이',
    content : '하이하이',
    date : '2021-01-01',
    location : '서울',
    time : '2020-01-01',
    membernum : 125,
  }],
};

//Middleware
//런치추가
export const createLunchAPI = _lunch => {
  return function (dispatch, getState, { history }) {
    const post = { content: _lunch, date: "2021-10-26", location: "asdlkfjas" };

    apis
      .createLunch(post)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
};

//런치수정
export const updateLunchAPI = _lunch => {
  return function (dispatch, getState, { history }) {
    const post = { content: _lunch, date: "2021-10-26", location: "asdlkfjas" };
    apis
      .updateLunch(post)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
};

//reducer
export default handleActions(
  {
    [CREATE_LUNCH]: (state, action) =>
      produce(state, draft => {
        console.log("CREATE");
        console.log(action.payload);
        draft.lunchList.push(action.payload.lunch);
      }),
    
    [UPDATE_LUNCH]: (state, action) =>
      produce(state, draft => {
        console.log("UPDATE");
        console.log(action.payload);

        draft.lunchList.indexOf
      })
  },
  initialState
);


//action creator export
const lunchActions = {
  createLunchAPI,
};

export { lunchActions };
