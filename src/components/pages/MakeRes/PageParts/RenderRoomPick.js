import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { updateRoom } from '../../../../state/actions/RoomActions';
import '../MakeRes.css';

function RenderRoomPick(props) {
  const clicked = props.roomOnProps;
  return (
    <>
      <div className="roomBox">
        <div
          onClick={() => props.updateRoom('CoWorking Room')}
          className={clicked === 'CoWorking Room' ? 'roomBtnActive' : 'roomBtn'}
        >
          CoWorking Room
        </div>

        <div
          onClick={() => props.updateRoom('Media Room')}
          className={clicked === 'Media Room' ? 'roomBtnActive' : 'roomBtn'}
        >
          Media Room
        </div>
      </div>
      <h2> You've Selected = {props.roomOnProps}</h2>
    </>
  );
}

const mapStateToProps = state => {
  return {
    roomOnProps: state.room,
  };
};

export default connect(mapStateToProps, { updateRoom })(RenderRoomPick);
