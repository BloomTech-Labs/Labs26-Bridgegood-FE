import axios from 'axios';

export const ADD_RESERVATION = 'ADD_RESERVATION';
export const SET_ERROR = 'SET_ERROR';
export const UPDATE_RESERVATIONS = 'UPDATE_RES';

export const add_reservation = reservationData => dispatch => {
  dispatch({ type: ADD_RESERVATION });
  axios
    .post('http://localhost:8000/reservations', reservationData)
    .then(res => {
      dispatch({ type: UPDATE_RESERVATIONS, payload: res.data });
    })
    .catch(err => {
      console.log('error fetching data from api, err: ', err);
      dispatch({
        type: SET_ERROR,
        payload: 'error fetching data from api, err: ',
      });
    });
};
