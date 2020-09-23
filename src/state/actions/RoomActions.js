export const UPDATE_ROOM = 'UPDATE_ROOM';

export const updateRoom = (room) => {
    console.log("ROOM FROM ACTION ====>", room)
    return {
        type: UPDATE_ROOM,
        payload: room
    };
};