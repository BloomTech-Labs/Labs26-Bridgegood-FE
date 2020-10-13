// import * as act from './actions'
// MANAGES THE STATE OF GENERAL, SHARED APP SETTINGS
import newAxios from '../../utils/axiosUtils';

const initialAppState = {
  loggedIn: false, //
  axios: null, // ref to initialized axios instance
  isFetching: false, // if needed
  user: null,

  errors: [],
};

// const initialUserState = {
//   id,
//   firstName,
//   lastName,
//   school,
//   bgUsername,
//   email,
//   phone,
//   profileUrl,
//   visits,
//   reservations,
//   role,
// };

/*

actions: update_X



*/

export function appReducer(state = initialAppState, action) {
  switch (action.type) {
    case 'APP_FETCHING':
      return {
        ...state,
        isFetching: action.payload,
      };

    case 'APP_LOGIN':
      return {
        ...state,
        loggedIn: true,
        axios: newAxios(action.payload),
      };

    case 'APP_LOGOUT':
      localStorage.removeItem('authToken');
      return {
        ...state,
        loggedIn: false,
        axios: newAxios(),
      };

    case 'APP_ERROR':
      return {
        ...state,
        errors: state.errors.unshift(action.payload.error).slice(0, 10),
      };

    default:
      return state;
  }
}
