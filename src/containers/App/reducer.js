import { fromJS } from 'immutable';
import {
  LOGIN_SUCCESS,
} from 'containers/Login/constants';

import {
  USER_REQUEST_LOGOUT,
} from './constants';

import uuid from 'uuid/v4'

const emptyUser = () => fromJS({ id: uuid() });
// The initial state of the App
const initialState = fromJS({
  loading: false,
  errors: [],
  currentUser: false,
  user: emptyUser(),
  ui: {
    dropdown: {
      open: {},
    },
  },
});

function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return state.merge({
        user: payload,
      });
    case USER_REQUEST_LOGOUT:
      return state.set('user', emptyUser());
    default:
      return state;
  }
}

export default appReducer;
