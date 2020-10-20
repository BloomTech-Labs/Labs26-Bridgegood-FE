import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from '../components/common/SignUp/';

describe('<SignUp /> test suite', () => {
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
