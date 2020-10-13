import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector, connect } from 'react-redux';
import { UPDATE_ROOM, updateRoom } from '../../../../state/actions/RoomActions';
import '../MakeRes.css';

export default function RenderRoomPick() {
  const dispatch = useDispatch();
  const { date, room } = useSelector(state => state.reservation);
  // const clicked = props.roomOnProps;
  console.log(date);
  if (date === undefined) {
    return (
      <>
        <div className="room-box-disabled">
          <div className="room-btn-disabled">CoWorking Room</div>

          <div className="room-btn-disabled">Media Room</div>
        </div>
        {/* <h2> You've Selected = {props.roomOnProps}</h2> */}
      </>
    );
  } else {
    return (
      <>
        <div className="room-box">
          <div
            onClick={() =>
              dispatch({ type: UPDATE_ROOM, payload: 'CoWorking Room' })
            }
            className={
              room === 'CoWorking Room' ? 'room-btn-active' : 'room-btn'
            }
          >
            CoWorking Room
          </div>

          <div
            onClick={() =>
              dispatch({ type: UPDATE_ROOM, payload: 'Media Room' })
            }
            className={room === 'Media Room' ? 'room-btn-active' : 'room-btn'}
          >
            Media Room
          </div>
        </div>
        {/* <h2> You've Selected = {props.roomOnProps}</h2> */}
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     date: state.date,
//     roomOnProps: state.room,
//   };
// };

// export default connect(mapStateToProps, { updateRoom })(RenderRoomPick);
