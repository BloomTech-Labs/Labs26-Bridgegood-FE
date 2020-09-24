export const UPDATE_TIME_SLOT = 'UPDATE_TIME_SLOT';

export const updateTimeSlot = (time_slot) => {
    console.log("TIMESLOT FROM ACTION ====>", time_slot)
    return {
        type: UPDATE_TIME_SLOT,
        payload: time_slot
    };
};