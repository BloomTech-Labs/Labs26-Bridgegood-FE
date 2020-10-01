export const UPDATE_STEP = 'UPDATE_STEP';

export const updateStep = step => {
  return {
    type: UPDATE_STEP,
    payload: step,
  };
};
