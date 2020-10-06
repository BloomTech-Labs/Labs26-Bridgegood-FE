import React, { useState, useEffect, useMemo } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';

import { SecureRoute, LoginCallback, useOktaAuth } from '@okta/okta-react';

import {
  HomePage,
  LoginPage,
  NotFoundPage,
  DonatePage,
  MakeResPage,
  WelcomeBoard,
  AdminPage,
} from './components/pages';
import Logout from './components/common/Logout';

import HomeContainer from './components/common/HomeContainer';
import AdminLayout from './components/pages/AdminLayout';
// import Dispatch from './components/pages/Dispatch';

export default function App() {
  // User info from Okta
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    let isSubscribed = true;
    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  return (
    // NOTE: SecureRoute to work correctly, we need to use the 'component' prop instead of relying on props.children
    <div className="App">
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <HomeContainer
              authService={authService}
              userInfo={userInfo}
              PageContent={HomePage}
            />
          )}
        />
        <Route path="/login">
          <HomeContainer
            authService={authService}
            userInfo={userInfo}
            PageContent={LoginPage}
          />
        </Route>
        <Route path="/logout" component={Logout} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route
          path="/donate"
          component={() => (
            <HomeContainer
              authService={authService}
              userInfo={userInfo}
              PageContent={DonatePage}
            />
          )}
        />
        <SecureRoute
          path="/welcome"
          component={() => (
            <HomeContainer
              authService={authService}
              userInfo={userInfo}
              PageContent={WelcomeBoard}
            />
          )}
        />
        <SecureRoute
          path="/reserve"
          component={() => (
            <HomeContainer
              authService={authService}
              userInfo={userInfo}
              PageContent={MakeResPage}
            />
          )}
        />
        <SecureRoute
          path="/admin"
          component={() => (
            <AdminLayout
              authService={authService}
              userInfo={userInfo}
              PageContent={AdminPage}
            />
          )}
        />

        <Route
          component={() => (
            <HomeContainer
              authService={authService}
              userInfo={userInfo}
              PageContent={NotFoundPage}
            />
          )}
        />
      </Switch>
    </div>
  );
}
