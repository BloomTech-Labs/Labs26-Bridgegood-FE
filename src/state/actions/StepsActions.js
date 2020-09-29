export const UPDATE_STEP = 'UPDATE_STEP';

export const updateStep = (step) => {
    console.log("STEPS FROM ACTION ====>", step)
    return {
        type: UPDATE_STEP,
        payload: step
    };
};