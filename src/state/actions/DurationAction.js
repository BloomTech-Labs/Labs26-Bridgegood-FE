export const UPDATE_DURATION = 'UPDATE_DURATION';

export const updateDuration = duration => {
  return {
    type: UPDATE_DURATION,
    payload: duration,
  };
};
