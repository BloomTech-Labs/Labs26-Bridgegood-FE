import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SecureRoute } from '@okta/okta-react';
import { useSelector } from 'react-redux';

const SecureAdminRoute = ({ component: Component, ...rest }) => {
  const app = useSelector(state => state.app);
  const roleId = useSelector(state => state.app.user.roleId);

  return (
    <SecureRoute
      {...rest}
      render={props => {
        if (
          (roleId === 0 ? parseInt(localStorage.getItem('roleId')) : roleId) ===
          1
        )
          return <Component {...props} />;
        else return <Redirect to="/welcome" />;
      }}
    />
  );
};

export default SecureAdminRoute;
