// Store and manage all admin dashboard related state

const initialState = {
  reservations: [],
  users: [],
};

export function adminReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADMIN_SET_USERS':
      return {
        ...state,
        users: action.payload,
      };
    case 'ADMIN_SET_RESERVATIONS':
      return {
        ...state,
        reservations: action.payload,
      };
    default:
      return state;
  }
}
