import { UPDATE_DURATION } from '../actions/DurationAction';
import { UPDATE_DATE } from '../actions/CalActions';
import { UPDATE_ROOM } from '../actions/RoomActions';
import { UPDATE_TIME_SLOT } from '../actions/TimeSlotActions';
import { UPDATE_STEP } from '../actions/StepsActions';
import { ADD_RESERVATION } from '../actions/AddResAction';
import { SET_ERROR } from '../actions/AddResAction';
import { UPDATE_RESERVATIONS } from '../actions/AddResAction';
import { UPDATE_DONATION } from '../actions/DonationAction';

export const initialState = {
  user: 'TestUser',
  reservations: [],
  duration: '0', // 1-2 hours, 3-4 hours, 6 hours
  date: '2011-11-11', //'Any present or future date'
  room: 'None', // 'CoWorker or Media'
  time_slot: 'None', // Examples of times 10,11,12,13,14,15,16,17 (10am - 5pm)
  currentStep: 0, // 0-2 (Pick time), (date/ room/ time slot), (finalize/ donate)
  donation: 'None', // 1, 5, 10, 20, Other Amount
  isFetchingData: false,
  isPostingData: false,
  isDeletingData: false,
  error: '',
};

export const makeResReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DURATION:
      return {
        ...state,
        duration: action.payload,
      };
    case UPDATE_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case UPDATE_ROOM:
      return {
        ...state,
        room: action.payload,
      };
    case UPDATE_TIME_SLOT:
      return {
        ...state,
        time_slot: action.payload,
      };
    case UPDATE_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case ADD_RESERVATION:
      return {
        ...state,
        isPostingData: true,
      };
    case UPDATE_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
      };
    case UPDATE_DONATION:
      return {
        ...state,
        donation: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
