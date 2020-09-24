import { UPDATE_DURATION } from '../actions/DurationAction'
import { UPDATE_DATE } from '../actions/CalActions'
import { UPDATE_ROOM } from '../actions/RoomActions'
import { UPDATE_TIME_SLOT } from '../actions/TimeSlotActions'

export const initialState = {
    duration: 0,
    date: '2011-11-11',
    room: 'None', 
    time_slot: "None"
    // Examples of times 10,11,12,13,14,15,16,17 (10am - 5pm)
};

export const makeResReducer = (state = initialState, action) => {
    console.log("ACTION FROM REDUCER ====>", "Initial State", state, "Action", action)
    switch (action.type) {
        case UPDATE_DURATION:
            return {
                ...state,
                duration: action.payload, 
            };
        case UPDATE_DATE:
            return {
                ...state,
                date: action.payload
            };
        case UPDATE_ROOM:
            return {
                ...state,
                room: action.payload
            };
        case UPDATE_TIME_SLOT:
            return {
                ...state,
                time_slot: action.payload
            };
        default:
            return state;
    }
}
