// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.

import {} from '../actions/index';

const initialState = {
  data: {
    TimeAmount: 1,
    Date: '1-1-20',
    RoomType: 'Front',
    TimeSlot: '10:00am',
  },
  isFetchingData: false,
  error: '',
};

export const Reducer = (state = initialState, action) => {
  return state;
};
