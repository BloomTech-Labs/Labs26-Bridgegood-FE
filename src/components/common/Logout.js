import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Logout = () => {
  const { authState, authService } = useOktaAuth();
  localStorage.removeItem('roleId');
  authService.logout('/');
  return (
    <>
      <h1>Logging out, please wait...</h1>
    </>
  );
};

export default Logout;
