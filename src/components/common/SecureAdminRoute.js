import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SecureRoute } from '@okta/okta-react';
import { useSelector } from 'react-redux';

const SecureAdminRoute = ({ component: Component, ...rest }) => {
  // const loggedIn = useSelector(state => state.app.loggedIn);
  // const isInstructor = useSelector(state => state.account.user.instructor)
  const isAdmin = useSelector(state => state.app.user?.role === 1);

  return (
    <SecureRoute
      {...rest}
      render={props => {
        console.log({ isAdmin: isAdmin });

        if (isAdmin) return <Component {...props} />;
        // console.log(isInstructor, 'why are we here???')
        else return <Redirect to="/welcome" />;
      }}
    />
  );
};

export default SecureAdminRoute;
