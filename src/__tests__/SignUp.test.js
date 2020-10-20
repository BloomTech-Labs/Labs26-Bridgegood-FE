import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from '../components/common/SignUp/';

describe('SignUp form', () => {
  const container = render(
    <SignUp
      firstName=""
      lastName=""
      schoolEnrolled=""
      usernmae=""
      phoneNumber=""
      password=""
    />
  );
  expect(container.type()).toBe('form');
});

// describe('<SignUp /> test suite', () => {
//   test('it handles a loading state', () => {
//     const authService = {
//       logout: jest.fn(),
//     };
//     const { getByText } = render(
//       <Router>
//         <SignUp userInfo={{ name: 'alex' }} authService={authService} />
//       </Router>
//     );
//     const button = getByText(/logout/i);
//     userEvent.click(button);
//     expect(authService.logout).toHaveBeenCalledTimes(1);
//     expect(getByText(/hi sara welcome to labs basic spa/i).innerHTML).toBe(
//       'Hi Sara Welcome to Labs Basic SPA'
//     );
//   });
// });

// describe('<SignUp /> test suite', () => {
//   beforeAll(() => {
//     Object.defineProperty(window, 'matchMedia', {
//       writable: true,
//       value: jest.fn().mockImplementation(query => ({
//         matches: false,
//         media: query,
//         onchange: null,
//         addListener: jest.fn(), // deprecated
//         removeListener: jest.fn(), // deprecated
//         addEventListener: jest.fn(),
//         removeEventListener: jest.fn(),
//         dispatchEvent: jest.fn(),
//       })),
//     });
//   });

//   test('signin widget mounts successfully', () => {
//     const { container } = render(<SignUp />);
//   });
// });
