import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import { updateDuration } from '../../../../state/actions/DurationAction';
import { updateStep } from '../../../../state/actions/StepsActions';
import '../MakeRes.css';

function RenderDuration(props) {
  const { onChange, radioStyle, value } = props;

  const ud = props.updateDuration(value);

  const clicked = props.durationOnProps;
  console.log(clicked);

  const nextStep = () => {
    if (clicked == !'0') {
      props.updateStep(1);
    }
  };

  return (
    <div className="duration-page">
      <div className="radio-box">
        <h1>
          How much time will you need at the <br /> Community Co-Working Space?{' '}
        </h1>
        <div>
          <div className="radio-group">
            <Radio.Group onChange={onChange}>
              <Radio
                style={radioStyle}
                value={'1-2 Hours'}
                onClick={() => props.updateDuration(value)}
              >
                1 - 2 Hours
              </Radio>
              <Radio
                style={radioStyle}
                value={'3-4 Hours'}
                onClick={() => props.updateDuration(value)}
              >
                3 - 4 Hours
              </Radio>
              <Radio
                style={radioStyle}
                value={'6 Hours'}
                onClick={() => props.updateDuration(value)}
              >
                6 Hours
              </Radio>
            </Radio.Group>
          </div>
          <h2>THE DURATION IS = {props.durationOnProps}</h2>
          <div className="radioBtn" onClick={() => props.updateStep(1)}>
            Next
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    durationOnProps: state.duration,
    stepOnProps: state.currentStep,
  };
};

export default connect(mapStateToProps, { updateDuration, updateStep })(
  RenderDuration
);
