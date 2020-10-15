// import * as act from './actions'
// MANAGES THE STATE OF GENERAL, SHARED APP SETTINGS
import newAxios from '../../utils/axiosUtils';

const initialAppState = {
  loggedIn: false, //
  axios: null, // ref to initialized axios instance
  isFetching: false, // if needed
  user: {
    id: '6bcd387f-3448-4d34-8de1-d4c748672ff5',
    first_name: 'Drake',
    last_name: 'Alia',
    school: 'Lambda School',
    bg_username: 'Drake-Alia',
    profile_url: 'https://www.bridgegood.dev/drake_alia',
    isLocked: 0,
    praises: 0,
    demerits: 0,
    user_rating: 0,
    visits: 0,
    reservations: 0,
    phone: '(733) 823-1535 x7735',
    email: 'llama002@maildrop.cc',
    role_id: 1,
    created_at: '2020-10-14T23:53:33.892Z',
    updated_at: '2020-10-14T23:53:33.892Z',
  },

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
