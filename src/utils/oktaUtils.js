export const initialOktaAuthState = {
  accessToken: null,
  idToken: null,
  isAuthenticated: null,
  isPending: true,
};

export function getOktaAuthToken(authSate = initialOktaAuthState) {
  return authSate.idToken;
}
