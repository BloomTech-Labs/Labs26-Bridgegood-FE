import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { Security } from '@okta/okta-react';

import 'antd/dist/antd.less';

import './index.less';
import { config } from './utils/oktaConfig';

import AppWithSecurity from './App';
import { makeResReducer as reducer } from './state/reducers/MakeResReducer';

const store = createStore(reducer, applyMiddleware(thunk));

function AppWithRouter() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <AppWithSecurity />
    </Security>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppWithRouter />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
