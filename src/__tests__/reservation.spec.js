import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { render, fireEvent } from '@testing-library/react';

import rootReducer from '../state/reducers/';
import { MakeResPage } from '../components/pages/MakeRes';

const store =
  process.env.REACT_APP_CUSTOM_ENV === 'dev'
    ? createStore(rootReducer, applyMiddleware(thunk))
    : createStore(rootReducer, applyMiddleware(thunk));

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {},
    };
  },
}));

describe('<MakeRes /> Duration Section Test Suite', () => {
  test('Steps is on correct step (Step 1)', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MakeResPage />
      </Provider>
    );
    const step = getByTestId('step-one');
    expect(step).toHaveClass('ant-steps-item-active');
  });
  test('Renders the first reservation page (pick duration)', async () => {
    const renderRes = await render(
      <Provider store={store}>
        <MakeResPage />
      </Provider>
    );
    const el = renderRes.container.querySelector('.durationH1');
    expect(el).toBeTruthy();
  });
  test('Pick Second duration (3-4 Hours)', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MakeResPage />
      </Provider>
    );
    const radio = getByTestId('radio-2');
    fireEvent.click(radio);
    expect(radio.checked).toBeTruthy();
    expect(radio.value).toBe('4');
  });
  test('Next Button is clickable', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MakeResPage />
      </Provider>
    );
    const radio = getByTestId('radio-2');
    fireEvent.click(radio);
    const nextIsClickable = getByTestId('nextButton');
    expect(nextIsClickable).toHaveClass('radioBtn-active');
  });
});

describe('<MakeRes /> Date, Room, Time Slot Section Test Suite', () => {
  beforeAll(async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MakeResPage />
      </Provider>
    );
    const radio = getByTestId('radio-2');
    fireEvent.click(radio);
    const nextIsClickable = getByTestId('nextButton');
    expect(nextIsClickable).toHaveClass('radioBtn-active');
    fireEvent.click(nextIsClickable);
  });

  test('Steps is on correct step (Step 2)', async () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <MakeResPage />
      </Provider>
    );
    const step = getAllByTestId('step-two');
    expect(step).toBeTruthy();
  });

  test('Calendar is there', async () => {
    const { getAllByTestId, queryAllByText } = render(
      <Provider store={store}>
        <MakeResPage />
      </Provider>
    );
    const calBox = queryAllByText(/Select a Date/i);
    expect(calBox).toBeTruthy();

    const cal = getAllByTestId('calendar');
    expect(cal).toBeTruthy();
  });

  test('Room Picker is there', async () => {
    const { getAllByTestId, queryAllByText } = render(
      <Provider store={store}>
        <MakeResPage />
      </Provider>
    );
    const calBox = queryAllByText(/Select a Room/i);
    expect(calBox).toBeTruthy();

    const cal = getAllByTestId('room-picker');
    expect(cal).toBeTruthy();
  });

  test('Time Slot Picker is there', async () => {
    const { getAllByTestId, queryAllByText } = render(
      <Provider store={store}>
        <MakeResPage />
      </Provider>
    );
    const calBox = queryAllByText(/Select Opening/i);
    expect(calBox).toBeTruthy();

    const cal = getAllByTestId('time-picker');
    expect(cal).toBeTruthy();
  });

  test('Date (25th of the month) Room (Media Room) & Time (10:00am) Selected', async () => {
    const { getByTestId, queryByText } = render(
      <Provider store={store}>
        <MakeResPage />
      </Provider>
    );
    // Select Date
    const dateSelected = queryByText(/25/i);
    expect(dateSelected).toBeTruthy();
    fireEvent.click(dateSelected);
    const roomOption = getByTestId('room-Media');
    expect(roomOption).toHaveClass('room-btn');

    // Select Room
    const roomSelected = getByTestId('room-Media');
    fireEvent.click(roomSelected);
    expect(roomSelected).toHaveClass('room-btn-active');

    // Select Time Slot
    const timeSelected = queryByText(/10:00am/i);
    expect(timeSelected).toHaveClass('tsBtn');
    fireEvent.click(timeSelected);
    expect(timeSelected).toHaveClass('tsBtnActive');

    // Finalize Reservation
    const finalize = getByTestId('finalize');
    expect(finalize).toHaveClass('finalBtn');
    // fireEvent.click(finalize)
  });
});
