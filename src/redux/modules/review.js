import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../common/axios";

const GET_REVIEW = "GET_REVIEW";
const ADD_REVIEW = "ADD_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";

const getReview = createAction(GET_REVIEW, reviewList => ({
  reviewList,
}));
const addReview = createAction(ADD_REVIEW, review => ({
  review,
}));
const deleteReview = createAction(DELETE_REVIEW, reviewId => ({
  reviewId,
}));

const initialState = {
  reviews: [],
};

const getReviewAPI = lunchId => {
  return function (dispatch, getState, { history }) {
    apis
      .getReview(lunchId)
      .then(res => {
        console.log(res);
        // dispatch(getReview(reviewList));
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};

const addReviewAPI = review => {
  return function (dispatch, getState, { history }) {
    const userId = getState().user.user.userId;

    apis
      .addReview(review)
      .then(res => {
        console.log(res);
        // dispatch(addReview(review));
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};

const deleteReviewAPI = reviewId => {
  return function (dispatch, getState, { history }) {
    console.log(reviewId);
    apis
      .deleteReview(reviewId)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};

export default handleActions(
  {
    [ADD_REVIEW]: (state, action) =>
      produce(state, draft => {
        draft.reviews.unshift(action.payload.review);
      }),
    [GET_REVIEW]: (state, action) =>
      produce(state, draft => {
        draft.reviews = action.payload.reviewList;
      }),
    [DELETE_REVIEW]: (state, action) =>
      produce(state, draft => {
        draft.reviews = draft.reviews.filter(
          c => c.commentId !== action.payload.reviewId
        );
      }),
  },
  initialState
);

const reviewActions = {
  addReviewAPI,
  getReviewAPI,
  deleteReviewAPI,
};

export { reviewActions };
