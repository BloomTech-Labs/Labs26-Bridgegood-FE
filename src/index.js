import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import 'antd/dist/antd.less';

import { NotFoundPage } from './components/pages/NotFound';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { HomePage } from './components/pages/Home';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import { MakeResPage } from './components/pages/MakeRes';
import { ResTimePage } from './components/pages/MakeRes/ResTime';
import WelcomeBoard from './components/pages/WelcomeBoard';
import Header from './components/pages/Home/Landing/Header/';
import Footer from './components/pages/Home/Landing/Footer/Footer';
import { DonatePage } from './components/pages/Donate';

// Yasir
import './index.module.css';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
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
    <Security {...config} onAuthRequired={authHandler}>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route path="/donate" component={DonatePage} />
        <SecureRoute path="/welcome" component={WelcomeBoard} />
        <SecureRoute path="/profile" component={ProfileListPage} />
        <SecureRoute path="/make-res-amount" component={ResTimePage} />
        <SecureRoute path="/make-res" component={MakeResPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Security>
  );
}
