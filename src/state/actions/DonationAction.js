export const UPDATE_DONATION = 'UPDATE_DONATION';

export const updateDonation = donation => {
  return {
    type: UPDATE_DONATION,
    payload: donation,
  };
};
