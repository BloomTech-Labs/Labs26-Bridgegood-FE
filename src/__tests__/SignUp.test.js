import React from 'react';
import { render, screen } from '@testing-library/react';
// import { screen } from '@testing-library/dom'
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from '../components/common/SignUp/';

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: null,
      },
      authService: {},
    };
  },
}));

describe('<SignUp /> test suite', () => {
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
  });
  test('renders SignUp component as a form', async () => {
    // window.history.pushState({}, 'Signup Test', '/signup');
    const renderResult = await render(<SignUp />);

    // expect(window.location.pathname).toBe('/signup');
    const el = renderResult.container.querySelector('#register');
    // const el = screen.getBy('#register')
    // console.log(el)
    expect(el).toBeTruthy();
    // expect(renderResult.container.querySelector('#register').elementType).toBe('form');
  });
});
