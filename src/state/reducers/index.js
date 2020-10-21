// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.
import { combineReducers } from 'redux';
import { makeResReducer } from './MakeResReducer';
import { appReducer } from './appReducer';
import { donationReducer } from './donationReducer';
import { adminReducer } from './adminReducer';

/*
Overall app's global state architecture:

Customer UI
-----------
App -- settings, axios reference, okta jwt
User
Donation


Admin UI
--------
Reservations
Users
(Donations)

*/

export default combineReducers({
  app: appReducer,
  reservation: makeResReducer,
  donation: donationReducer,
  admin: adminReducer,
});
