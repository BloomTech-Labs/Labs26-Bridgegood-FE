import { UPDATE_DURATION } from '../actions/DurationAction'

export const initialState = {
    duration: 1,
    date: '10-1-20',
    room: 'front',
    timeslot: 10 
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
        default:
            return state;
    }
}
