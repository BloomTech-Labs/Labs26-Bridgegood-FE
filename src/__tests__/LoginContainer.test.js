import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { render } from '@testing-library/react';

import LoginContainer from '../components/pages/Login/LoginContainer';
import Login from '../components/common/Login';

// const oldWindowLocation = window.location

// jest.mock('@okta/okta-react', () => ({
//   useOktaAuth: () => {
//     return {
//       authState: {
//         isAuthenticated: null,
//       },
//       authService: {},
//     };
//   },
// }));

describe('<LoginContainer /> test suite', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    window.history.pushState({}, 'Login Test', '/login');

    // console.log(oldWindowLocation, window.location)
    // delete window.location
    // window.location = Object.defineProperties(
    //   {},
    //   {
    //     ...Object.getOwnPropertyDescriptors(oldWindowLocation),
    //     assign: {
    //       configurable: true,
    //       value: jest.fn(),
    //     },
    //   },
    // )
  });

  // beforeEach(() => {
  //   window.location.assign.mockReset()
  // })

  // afterAll(() => {
  //   // restore `window.location` to the `jsdom` `Location` object
  //   window.location = oldWindowLocation
  // })

  // test('it calls assign with expected URL', () => {
  //   window.location.assign('/login')

  //   expect(window.location.assign).toHaveBeenCalledTimes(1)
  //   expect(window.location.assign).toHaveBeenCalledWith(
  //     '/login',
  //   )
  // })

  test('signin widget mounts successfully', () => {
    // window.location.assign('/login')

    const { container } = render(<Login />);

    expect(container.querySelector('#sign-in-widget')).toBeTruthy();
  });

  test('signin location is /login', () => {
    expect(window.location.pathname).toBe('/login');
  });
});
