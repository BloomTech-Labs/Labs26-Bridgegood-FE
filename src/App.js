import React, { useState, useEffect, useMemo } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { SecureRoute, LoginCallback, useOktaAuth } from '@okta/okta-react';

import newAxios from './utils/axiosUtils';
import { getOktaAuthToken } from './utils/oktaUtils';

import SecureAdminRoute from './components/common/SecureAdminRoute';
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  DonatePage,
  MakeResPage,
  WelcomeBoard,
  AdminPage,
  UsersPage,
} from './components/pages';
import Logout from './components/common/Logout';

import HomeContainer from './components/common/HomeContainer';
import AdminLayout from './components/pages/AdminLayout';
import ConfirmationPage from './components/pages/Confirmation/ConfirmationPage';
// import Dispatch from './components/pages/Dispatch';

import {
  APP_AUTHSTATE_UPDATE,
  USER_UPDATE,
  USER_RESET,
  USER_FETCHING,
  APP_ERROR,
} from './state/reducers/appReducer';

export default function App() {
  const { authState, authService } = useOktaAuth();
  // const app = useSelector(state => state.app)
  // const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(authState, authService)
    // console.log(app)

    dispatch({ type: APP_AUTHSTATE_UPDATE, payload: authState });

    if (!authState.isAuthenticated) {
      dispatch({ type: USER_RESET });
    } else {
      dispatch({ type: USER_FETCHING, payload: true });
      const axios = newAxios(getOktaAuthToken(authState));
      axios
        .get('user')
        .then(res => {
          // console.log("Retrieved user: ", res.data)
          const resUser = res.data.user;
          const newUser = {
            firstName: resUser.first_name,
            lastName: resUser.last_name,
            school: resUser.school,
            bgUsername: resUser.bg_username,
            praises: resUser.praises,
            demerits: resUser.demerits,
            userRating: resUser.user_rating,
            email: resUser.email,
            phone: resUser.phone,
            profileUrl: resUser.profile_url,
            visits: resUser.visits,
            reservations: resUser.reservations,
            roleId: resUser.role_id, // uncomment to set user's role
          };
          dispatch({ type: USER_UPDATE, payload: newUser });
        })
        .catch(err => {
          dispatch({ type: APP_ERROR, payload: 'Error retrieving user' });
          // console.log("Error retrieving user", err)
        });
      // perform backend API call to retrieve user data
    }
  }, [authState]);

  return (
    // NOTE: SecureRoute to work correctly, we need to use the 'component' prop instead of relying on props.children
    <div className="App">
      <Switch>
        <Route
          path="/"
          exact
          component={() => <HomeContainer pageContent={HomePage} />}
        />
        <Route path={['/login', '/signup']}>
          <HomeContainer pageContent={LoginPage} />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route
          path="/donate"
          component={() => <HomeContainer pageContent={DonatePage} />}
        />
        <SecureRoute
          path="/welcome"
          component={() => <HomeContainer pageContent={WelcomeBoard} />}
        />
        <SecureRoute
          path="/reservation"
          component={() => <HomeContainer pageContent={MakeResPage} />}
        />
        <SecureAdminRoute
          path={['/admin', '/admin/dashboard']}
          exact
          component={() => <AdminLayout pageContent={AdminPage} />}
        />
        <SecureAdminRoute
          path="/admin/users"
          component={() => <AdminLayout pageContent={UsersPage} />}
        />
        <SecureRoute
          path="/confirmation/:resid"
          component={() => <HomeContainer pageContent={ConfirmationPage} />}
        />
        <Route component={() => <HomeContainer pageContent={NotFoundPage} />} />
      </Switch>
    </div>
  );
}
