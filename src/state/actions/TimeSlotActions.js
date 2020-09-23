export const UPDATE_TIMESLOT = 'UPDATE_TIMESLOT';

export const updateTimeSlot = (timeslot) => {
    console.log("TIMESLOT FROM ACTION ====>", timeslot)
    return {
        type: UPDATE_TIMESLOT,
        payload: timeslot
    };
};