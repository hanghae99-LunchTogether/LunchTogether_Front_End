import { apis } from "../../shared/axios";

export const createroomAPI = (body) => {
    return function (dispatch, getState, { history }) {
      apis
        .createLunch(body)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
};

const chatActions = {
    createroomAPI,
  };
  
  export { chatActions };