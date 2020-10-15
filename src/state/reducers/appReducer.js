// import * as act from './actions'
// MANAGES THE STATE OF GENERAL, SHARED APP SETTINGS
// import newAxios from '../../utils/axiosUtils';
import { initialOktaAuthState, getOktaAuthToken } from '../../utils/oktaUtils';

export const APP_AUTHSTATE_UPDATE = 'APP_AUTHSTATE_UPDATE';
// export const APP_AXIOS_UPDATE = 'APP_AXIOS_UPDATE'
// export const APP_FETCHING = 'APP_FETCHING'
export const APP_ERROR = 'APP_ERROR';

const initialAppState = {
  // App -- okta jwt, settings, axios reference,
  // axios: newAxios(),// null, // ref to initialized axios instance
  isLoggedIn: false,
  oktaAuthState: initialOktaAuthState,
  oktaToken: null,

  errors: [],
};

/*

actions: update_X

*/

export function appReducer(state = initialAppState, action) {
  switch (action.type) {
    // case APP_FETCHING:
    //   return {
    //     ...state,
    //     isFetching: action.payload,
    //   };

    case APP_AUTHSTATE_UPDATE:
      return {
        ...state,
        isLoggedIn: action.payload.isAuthenticated ? true : false,
        oktaAuthState: action.payload,
        oktaToken: getOktaAuthToken(action.payload),
      };

    // case APP_AXIOS_UPDATE:
    //   return {
    //     ...state,
    //     axios: newAxios(action.payload),
    //   };

    // case 'APP_LOGOUT':
    //   // localStorage.removeItem('authToken');
    //   return {
    //     ...state,
    //     axios: newAxios(),
    //   };

    case APP_ERROR:
      return {
        ...state,
        // isFetching: false,
        errors: [action.payload, ...state.errors.slice(1)],
      };

    default:
      return state;
  }
}
