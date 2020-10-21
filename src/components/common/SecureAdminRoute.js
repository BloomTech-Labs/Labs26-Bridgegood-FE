import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SecureRoute } from '@okta/okta-react';
import { useSelector } from 'react-redux';

const SecureAdminRoute = ({ component: Component, ...rest }) => {
  const isAdmin = useSelector(state => state.app.user.roleId === 1);
  const isFetching = useSelector(state => state.app.isFetching === true);

  return (
    <SecureRoute
      {...rest}
      render={props => {
        if (isFetching) {
          return <h1>Loading User Profile</h1>;
        } else {
          if (isAdmin) return <Component {...props} />;
          else return <Redirect to="/welcome" />;
        }
      }}
    />
  );
};

export default SecureAdminRoute;
