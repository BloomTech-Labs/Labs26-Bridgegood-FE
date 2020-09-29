import React from 'react';
import { connect } from 'react-redux';

import RenderCalendar from './PageParts/RenderCalendar';
import RenderRoomPick from './PageParts/RenderRoomPick';
import RenderTimeSlot from './PageParts/RenderTimeSlot';
import Header from '../Home/Landing/Header/index';
import ResSteps from './PageParts/ResSteps'
import Footer from '../Home/Landing/Footer/Footer';
import { updateStep } from '../../../state/actions/StepsActions';
import { DurationPage } from './Duration'
import './MakeRes.css';

function ResContainer(props) {
  const currentStep = props.currentStep

  if(currentStep === 0){
    return(
      <>
        <Header />

        <div className='steps-box'>
          <div className='steps'>
            <ResSteps />
          </div>
        </div>
        
        <DurationPage />
        
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className='steps-box'>
        <div className='steps'>
          <ResSteps />
        </div>
      </div>
      
      <div className='big-box'>
        <div className='row'>
          <div className='col-1 col'>
            <h2>Select a Date</h2>
            <div className='components'>
              <RenderCalendar 
              />
            </div>
          </div>

          <div className='col-2 col'>
            <h2>Select a Room</h2>
            <div className='components'>
              <RenderRoomPick 
              />
            </div>
          </div>

          <div className='col-3 col'>
            <h2>Select Opening</h2>
            <div className='components'>
              <RenderTimeSlot 
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const mapStateToProps = state => {
  return {
    currentStep: state.currentStep
  };
}

export default connect(mapStateToProps, { updateStep })(ResContainer);
