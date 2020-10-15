// import * as act from './actions'
// MANAGES THE STATE OF GENERAL, SHARED APP SETTINGS

// Actions
export const USER_UPDATE = 'USER_UPDATE';
export const USER_RESET = 'USER_RESET';
export const USER_FETCHING = 'USER_FETCHING';
export const USER_ERROR = 'USER_ERROR';

const initialUserData = {
  id: '',
  firstName: '',
  lastName: '',
  school: '',
  bgUsername: '',
  praises: 0,
  demerits: 0,
  userRating: 0,
  email: '',
  phone: '',
  profileUrl: '',
  visits: 0,
  reservations: 0,
  role: 1, // default to admin
};

const initialUserState = {
  ...initialUserData,
  isFetching: false,
  errors: [],
};

/*

actions: update_X

*/

export function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case USER_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    case USER_UPDATE:
      return {
        ...state,
        isFetching: false,
        ...action.payload,
      };

    case USER_RESET:
      return {
        ...state,
        isFetching: false,
        ...initialUserData,
      };

    case USER_ERROR:
      return {
        ...state,
        isFetching: false,
        errors: [action.payload, ...state.errors.slice(1)],
      };

    default:
      return state;
  }
}
