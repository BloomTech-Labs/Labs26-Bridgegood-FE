// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.
import { combineReducers } from 'redux';
import CalReducer from './CalReducer';
import RoomReducer from './RoomReducer';
import TimeSlotReducer from './TimeSlotReducer';

export default combineReducers({
  calendar: CalReducer,
  room: RoomReducer,
  timeslot: TimeSlotReducer,
});
