export const UPDATE_DURATION = 'UPDATE_DURATION';

export const updateDuration = duration => {
    console.log("DURATION FROM ACTION ====>", duration)
    return {
        type: UPDATE_DURATION,
        payload: duration
    }
}