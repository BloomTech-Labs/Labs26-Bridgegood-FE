import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import 'antd/dist/antd.less';

import { config } from './utils/oktaConfig';

import { makeResReducer as reducer } from './state/reducers/MakeResReducer';

import {
  HomePage,
  LoginPage,
  NotFoundPage,
  DonatePage,
  MakeResPage,
  WelcomeBoard,
} from './components/pages';
import HomeContainer from './components/common/HomeContainer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <div className="App">
      <Security {...config} onAuthRequired={authHandler}>
        <Switch>
          <Route
            path="/login"
            component={() => <HomeContainer PageContent={LoginPage} />}
          />

          {/* <Route path="/login" component={LoginPage} /> */}
          <Route path="/implicit/callback" component={LoginCallback} />
          <Route
            path="/"
            exact
            component={() => <HomeContainer PageContent={HomePage} />}
          />
          <SecureRoute
            path="/make-res"
            component={() => <HomeContainer PageContent={MakeResPage} />}
          />
          <Route
            path="/welcome"
            component={() => <HomeContainer PageContent={WelcomeBoard} />}
          />
          <Route
            path="/donate"
            component={() => <HomeContainer PageContent={DonatePage} />}
          />
          <Route
            component={() => <HomeContainer PageContent={NotFoundPage} />}
          />
        </Switch>
      </Security>
    </div>
  );
}
