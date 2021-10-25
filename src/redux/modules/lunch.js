/* eslint-disable */

import { produce } from "immer";

//posts
const LOAD_POST_LIST = "posts/LOAD_POST_LIST";
const LOAD_CURRENT_POST = "posts/LOAD_CURRENT_POST";
const CREATE = "posts/CREATE";
const UPDATE = "posts/UPDATE";
const DELETE = "posts/DELETE";

//comment
const ADD_COMMENT = "posts/ADD_COMMENT";
const MODIFY_COMMENT = "posts/MODIFY_COMMENT";
const REMOVE_COMMENT = "posts/REMOVE_COMMENT";

//action creater

const loadPosts = (postList, totalElements) => ({
  type: LOAD_POST_LIST,
  payload: { postList, totalElements },
});

const loadCurrentPost = (postId, data) => ({
  type: LOAD_CURRENT_POST,
  payload: { postId, data },
});

const createPost = newPost => ({
  type: CREATE,
  payload: newPost,
});

const updatePost = updatedPost => ({
  type: UPDATE,
  payload: updatedPost,
});

const deletePost = postId => ({
  type: DELETE,
  payload: postId,
});

const addCommentToPost = addedComment => ({
  type: ADD_COMMENT,
  payload: addedComment,
});

const modifyCommentToPost = (commentId, newComment) => ({
  type: MODIFY_COMMENT,
  payload: { commentId, newComment },
});

const removeCommentToPost = commentId => ({
  type: REMOVE_COMMENT,
  payload: commentId,
});

const initialState = {
  postList: [],
  current: {},
};

export default function postsReducer(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_POST_LIST: {
        console.log("LOAD_POST_LIST");
        console.log(action.payload);
        break;
      }
      case LOAD_CURRENT_POST: {
        console.log("LOAD_CURRENT_POST");
        console.log(action.payload);
        break;
      }
      case CREATE: {
        console.log("CREATE");
        console.log(action.payload);
        break;
      }
      case UPDATE: {
        console.log("UPDATE");
        console.log(action.payload);
        break;
      }
      case DELETE: {
        console.log("DELETE");
        console.log(action.payload);
        break;
      }
      case ADD_COMMENT: {
        console.log("ADD_COMMENT");
        console.log(action.payload);
        break;
      }
      case MODIFY_COMMENT: {
        console.log("MODIFY_COMMENT");
        console.log(action.payload);
        break;
      }
      case REMOVE_COMMENT: {
        console.log("REMOVE_COMMENT");
        console.log(action.payload);
        break;
      }
      default:
        break;
    }
  });
}
