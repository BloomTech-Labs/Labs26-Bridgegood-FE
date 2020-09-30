export const UPDATE_ROOM = 'UPDATE_ROOM';

export const updateRoom = (room) => {
    return {
        type: UPDATE_ROOM,
        payload: room
    };
};