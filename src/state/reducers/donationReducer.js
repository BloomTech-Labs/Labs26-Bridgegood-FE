// import * as act from './actions'
// MANAGES THE STATE OF GENERAL, SHARED APP SETTINGS

export const DONATION_UPDATE = 'DONATION_UPDATE';

const initialDonationState = {
  amount: 5,
  email: '',
  user: null, // can be null
  // some timestamps
};

/*

  
  actions: update_X
  
  */

export function donationReducer(state = initialDonationState, action) {
  switch (action.type) {
    case 'DONATION_FETCHING':
      return {
        ...state,
        isFetching: action.payload,
      };

    case DONATION_UPDATE:
      return {
        ...state,
        ...action.payload,
      };

    case 'DONATION_ERROR':
      return {
        ...state,
        errors: state.errors.unshift(action.payload.error).slice(0, 10),
      };

    default:
      return state;
  }
}
