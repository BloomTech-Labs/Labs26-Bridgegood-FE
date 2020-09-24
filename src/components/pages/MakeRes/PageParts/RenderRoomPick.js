import React from 'react';
import { Button, Col } from 'antd';
import { connect } from 'react-redux';
import { updateRoom } from '../../../../state/actions/RoomActions';
import '../MakeRes.css'

function RenderRoomPick(props) {

  return (
    <>
      <div className='roomBox'>
          <Button
            onClick={()=> props.updateRoom('CoWorking Room')}
            className='roomBtn'
          >
              CoWorking Room
          </Button>

          <Button
          onClick={()=> props.updateRoom('Media Room')}
          className='roomBtn'
          >
            Media Room
          </Button>
        
      </div>
        <h2> You've Selected = {props.roomOnProps}</h2>
    </>
  );
};

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    roomOnProps: state.room
  };
};

export default connect(mapStateToProps, {updateRoom})(RenderRoomPick);
