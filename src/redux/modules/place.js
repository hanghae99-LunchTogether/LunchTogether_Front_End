import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SELECT_PLACE = "SELECT_PLACE";

const selectPlace = createAction(SELECT_PLACE, place => ({ place }));

const initialState = {
  place: null,
};

export const selectPlaceMiddleware = place => {
  return function (dispatch, getState, { hisotry }) {
    dispatch(selectPlace(place));
  };
};

export default handleActions(
  {
    [SELECT_PLACE]: (state, action) =>
      produce(state, draft => {
        draft.place = action.payload.place;
      }),
  },
  initialState
);
