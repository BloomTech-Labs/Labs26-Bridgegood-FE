import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { updateRoom } from '../../../../state/actions/RoomActions';
import '../MakeRes.css';

function RenderRoomPick(props) {
  const clicked = props.roomOnProps;
  console.log(props.date);
  if (props.date === undefined) {
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
            onClick={() => props.updateRoom('CoWorking Room')}
            className={
              clicked === 'CoWorking Room' ? 'room-btn-active' : 'room-btn'
            }
          >
            CoWorking Room
          </div>

          <div
            onClick={() => props.updateRoom('Media Room')}
            className={
              clicked === 'Media Room' ? 'room-btn-active' : 'room-btn'
            }
          >
            Media Room
          </div>
        </div>
        {/* <h2> You've Selected = {props.roomOnProps}</h2> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    date: state.date,
    roomOnProps: state.room,
  };
};

export default connect(mapStateToProps, { updateRoom })(RenderRoomPick);
