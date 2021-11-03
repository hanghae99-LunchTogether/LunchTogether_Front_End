/* eslint-disable */

import { produce } from "immer";
import { create } from "lodash";
import { createAction, handleActions } from "redux-actions";

import { apis } from "../../shared/axios";

//action
const GET_ONE_LUNCH = "lunch/GET_ONE_LUNCH";
const CREATE_LUNCH = "lunch/CREATE_LUNCH";
const UPDATE_LUNCH = "lunch/UPDATE_LUNCH";
const DELETE_LUNCH = "lunch/DELETE_LUNCH";
const GET_LUNCHLIST_MAIN = "lunch/GET_LUNCHLIST_MAIN";

//action creater
const getOneLunch = createAction(GET_ONE_LUNCH, (lunch) => ({lunch}));
const createLunch = createAction(CREATE_LUNCH, (lunch) => ({ lunch }));
const updateLunch = createAction(UPDATE_LUNCH, (lunch) => ({ lunch }));
const deleteLunch = createAction(DELETE_LUNCH, (lunch) => ({ lunch }));
const getLunchListMain = createAction(GET_LUNCHLIST_MAIN, (lunchList) => ({
  lunchList,
}));

//initialState
const initialState = {
  lunchListMain: [],
  lunchList: [],
};

//Middleware

//런치요청
export const getOneLunchAPI = (id) => {
  return function (dispatch, getState, { history }) {
    apis
      .getOneLunch(id)
      .then((res) => {
        console.log('게시글을 불러오는데 성공?', res.data)
        distpatch(getOneLunch(res.data.data.lunch))
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

//런치추가
export const createLunchAPI = (_lunch) => {
  return function (dispatch, getState, { history }) {
    apis
      .createLunch(_lunch)
      .then((res) => {
        console.log(res.data);
        dispatch(createLunch(res.data.data));
        // history.push("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

//런치수정
export const updateLunchAPI = (_lunch) => {
  return function (dispatch, getState, { history }) {
    // console.log( post_id, _lunch );
    apis
      .updateLunch(_lunch)
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

export const getLunchListMainAPI = () => {
  return function (dispatch, getState, { history }) {
    apis.getLunchListMain().then((res) => {
      console.log(res);
      const lunchList = res.data.lunch;
      dispatch(getLunchListMain(lunchList));
    });
  };
};

//reducer
export default handleActions(
  {
    [GET_ONE_LUNCH]: (state, action) =>
    produce(state, (draft) => {
      draft.lunchList = action.payload.lunchList;
      console.log('GET_ONE_LUNCH');
      console.log(action.payload);
    }),

    [CREATE_LUNCH]: (state, action) =>
      produce(state, (draft) => {
        draft.lunchList.push(action.payload.lunch);
      }),

    [UPDATE_LUNCH]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        let idx = draft.lunchList.findIndex(
          (p) => p.lunchid === action.payload.post_id
        );
        draft.lunchList[idx] = {
          ...draft.lunchList[idx],
          ...action.payload._lunch,
        };
      }),

    [DELETE_LUNCH]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.lunchList = draft.lunchList.filter(
          (p) => p.lunchid !== action.payload.lunchid
        );
        draft.lunchList.indexOf;
      }),
    [GET_LUNCHLIST_MAIN]: (state, action) =>
      produce(state, (draft) => {
        draft.lunchListMain = action.payload.lunchList;
      }),
  },
  initialState
);

//action creator export
const lunchActions = {
  createLunchAPI,
  updateLunchAPI,
  deleteLunchAPI,
  getLunchListMainAPI,
  getOneLunchAPI,
};

export { lunchActions };
