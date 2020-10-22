// import * as act from './actions'
// MANAGES THE STATE OF GENERAL, SHARED APP SETTINGS
// import newAxios from '../../utils/axiosUtils';
import { initialOktaAuthState, getOktaAuthToken } from '../../utils/oktaUtils';

export const APP_AUTHSTATE_UPDATE = 'APP_AUTHSTATE_UPDATE';
// export const APP_AXIOS_UPDATE = 'APP_AXIOS_UPDATE'
// export const APP_FETCHING = 'APP_FETCHING'
export const APP_ERROR = 'APP_ERROR';

// User Actions
export const USER_UPDATE = 'USER_UPDATE';
export const USER_RESET = 'USER_RESET';
export const USER_FETCHING = 'USER_FETCHING';
export const USER_ERROR = 'USER_ERROR';

const initialUser = {
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
  roleId: 0, // default to non-admin
  // isFetching: false,
};

const initialAppState = {
  isLoggedIn: false,
  oktaAuthState: initialOktaAuthState,
  oktaToken: null,
  isFetching: false,

  user: { ...initialUser },

  errors: [],
};

export function appReducer(state = initialAppState, action) {
  switch (action.type) {
    case APP_AUTHSTATE_UPDATE:
      return {
        ...state,
        isLoggedIn: action.payload.isAuthenticated ? true : false,
        oktaAuthState: action.payload,
        oktaToken: getOktaAuthToken(action.payload),
      };

    case APP_ERROR:
      return {
        ...state,
        // isFetching: false,
        errors: [action.payload, ...state.errors.slice(1)],
      };

    case USER_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    case USER_UPDATE:
      return {
        ...state,
        user: { ...action.payload, isFetching: false },
      };

    case USER_RESET:
      return {
        ...state,
        user: { ...initialUser },
      };

    default:
      return state;
  }
}
