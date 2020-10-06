import { useOktaAuth } from '@okta/okta-react';

const Logout = () => {
  const { authState, authService } = useOktaAuth();

  return authService.logout('/');
};

export default Logout;
