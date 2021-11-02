import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

//액션타입
const GET_COMMENT = "GET_COMMENT";
// const ADD_COMMENT = "ADD_COMMENT";
// const DELETE_COMMENT = "DELETE_COMMENT";

//액션생성자
const getComment = createAction(GET_COMMENT, commentList => ({
  commentList,
}));
// const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
// const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
//   commentId,
// }));

//initialState
const initialState = {
  commentList: [],
};

//middleware
const getCommentAPI = lunchId => {
  return function (dispatch, getState, { history }) {
    console.log(lunchId);
    apis
      .getComment(lunchId)
      .then(res => {
        console.log("불러오기연결성공????", res);
        // dispatch(getComment(res.data));
      })
      .catch(e => {
        alert("댓글을 불러오는데 실패하였습니다.");
      });
  };
};

// const addCommentAPI = (comment) => {
//   return function (dispatch, getState, { history }) {
//     console.log("등록연결");
//     apis
//       .addComment(comment)
//       .then((res) => {
//         dispatch(getCommentAPI(comment.lunchId));
//       })
//       .catch((e) => {
//         alert("댓글을 작성하는데 실패하였습니다.");
//       });
//   };
// };

// const deleteCommentAPI = (commentId) => {
//   return function (dispatch, getState, { history }) {
//     console.log("삭제연결");
//     apis
//       .deleteComment(commentId)
//       .then((res) => {
//         dispatch(deleteComment(commentId));
//       })
//       .catch((e) => {
//         alert("댓글 삭제에 실패하였습니다.");
//       });
//   };
// };

//reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.commentList = action.payload.commentList;
      }),
    // [ADD_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.commentList.unshift(action.payload.comment);
    //   }),
    // [DELETE_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.commentList = draft.commentList.filter(
    //       (c) => c.commentId !== action.payload.commentId
    //     );
    //   }),
  },
  initialState
);

//action creator export
const actionCreators = {
  getComment,
  getCommentAPI,
  // addCommentAPI,
  // deleteCommentAPI,
};

export { actionCreators };
