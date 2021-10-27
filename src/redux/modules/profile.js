import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

// actions Type
const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";

// action creators
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

//initialState
const initialState = {
  image_url: "",
  uploading: false,
  preview: null,
};

//middleware
// const updateProfileAPI = () => {
//   return function (dispatch, getState, { history }) {
//     let image = imgInput.current?.files[0];
//     const upload = storage.ref(`images/${image.name}`).put(image);

//     upload.then((snapshot) => {
//       console.log(snapshot);
//     });
//   };
// };

//reducer
export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
      }),

    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),

    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

//action creator export
const profileActions = {
  uploadImage,
  setPreview,
};

export { profileActions };
