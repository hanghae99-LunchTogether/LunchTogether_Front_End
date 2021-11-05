import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

//액션타입
const ADD_REVIEW = "ADD_REVIEW";
const GET_REVIEW = "GET_REVIEW";

//액션생성자
const addReview = createAction(ADD_REVIEW, (review) => ({ review }));
const getReview = createAction(GET_REVIEW, () => ({}));

//initialState
const initialState = {
  reviewList: [],
};

//middleware
const addReviewAPI = (review) => {
  return function (dispatch, getState, { history }) {
    console.log("일단 도착?", review);
    apis
      .addReview(review)
      .then((res) => {
        console.log("서버연결 되나욤", res);
      })
      .catch((e) => {
        console.log(e.response);
        alert("리뷰를 등록하는데 실패하였습니다.");
      });
  };
};

const getReviewAPI = () => {
  return function (dispatch, getState, { history }) {};
};

//reducer
export default handleActions(
  {
    [ADD_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.reviewtList.unshift(action.payload.comment);
      }),
    [GET_REVIEW]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  getReviewAPI,
  addReviewAPI,
};

export { actionCreators };
