import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_ROOM } from '../../../../state/reducers/MakeResReducer';
import '../MakeRes.css';

export default function RenderRoomPick() {
  const dispatch = useDispatch();
  const { date, room } = useSelector(state => state.reservation);

  const roomTypes = [{ type: 'CoWorking Room' }, { type: 'Media Room' }];

  return (
    <>
      <div
        data-testid="room-picker"
        className={date === '2011-11-11' ? 'room-box-disabled' : 'room-box'}
      >
        {roomTypes.map((roomType, index) => {
          return (
            <div
              data-testid={
                date === '2011-11-11'
                  ? 'room-disabled'
                  : roomType.type === 'CoWorking Room'
                  ? 'room-CoWorking'
                  : 'room-Media'
              }
              key={index}
              onClick={
                date === '2011-11-11'
                  ? null
                  : () =>
                      dispatch({
                        type: UPDATE_ROOM,
                        payload: roomType.type,
                      })
              }
              value={roomType.type}
              className={
                date === '2011-11-11'
                  ? 'room-btn-disabled'
                  : roomType.type === room
                  ? 'room-btn-active'
                  : 'room-btn'
              }
            >
              {roomType.type}
            </div>
          );
        })}
      </div>
    </>
  );
}
