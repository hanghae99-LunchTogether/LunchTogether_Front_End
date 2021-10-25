import { produce } from 'immer';

export const LOGIN = 'user/LOGIN';
export const LOG_OUT = 'user/LOG_OUT';
export const AUTHORIZED = 'user/AUTHORIZED';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

const logOut = () => ({ type: LOG_OUT });

const authorize = (email, nickname) => ({
  type: AUTHORIZED,
  payload: { email, nickname },
});

const initialState = {
  email: '',
  username: '',
  isAuthorized: false,
};

export default function userReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN:
      case AUTHORIZED: {
        console.log('AUTHORIZED');
        console.log(action.payload);
        break;
      }
      case LOG_OUT: {
        console.log('AUTHORIZED');
        console.log(action.payload);
        break;
      }
      default:
        break;
    }
  });
}
