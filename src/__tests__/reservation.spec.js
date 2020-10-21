// import React from 'react';
// import {
//     render,
//     screen,
//     waitForElementToBeRemoved,
//     act,
//     getByTestId,
//   } from '@testing-library/react';
// import { SecureRoute, LoginCallback, useOktaAuth } from '@okta/okta-react';
// import { BrowserRouter as Router } from 'react-router-dom';

// import HomeContainer from '../components/common/HomeContainer';
// import { MakeResPage } from '../components/pages/MakeRes';

// jest.mock('../api', () => {
//     return { getProfileData: () => Promise.resolve([]) };
//   });
//   jest.mock('@okta/okta-react', () => ({
//     useOktaAuth: () => {
//       return {
//         authState: {
//           isAuthenticated: true,
//         },
//         authService: {},
//       };
//     },
//   }));

// describe('<ProfileListContainer />', () => {
//     test('renders the first reservation page where you pick your duration', async () => {
//         const promise = Promise.resolve();
//         const { getByText } = render(
//             <Router
//                 path="/reservation"
//                 component={() => (
//                 <HomeContainer
//                     authService={authService}
//                     userInfo={userInfo}
//                     PageContent={MakeResPage}
//                 />
//                 )}
//             />
//         );
//         const durationMessage = getByText(/How much time will you need at the Community Co-Working Space?/i);
//         expect(durationMessage.outerHTML).toBe('How much time will you need at the Community Co-Working Space?');
//         await act(() => promise);
//     });
// });
