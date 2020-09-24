export const UPDATE_DATE = 'UPDATE_DATE';

export const updateDate = (date) => {
    console.log("DATE FROM ACTION ====>", date)
    return {
        type: UPDATE_DATE,
        payload: date
    };
};
