import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Radio, Button } from 'antd';
import { updateDuration } from '../../../../state/actions/DurationAction';

const { Content } = Layout;

function RenderDuration(props) {
  const { onChange, radioStyle, value } = props;
  console.log("Value from Duration ", value);

  const noDuraction = props.durationOnProps
  console.log(props.durationOnProps)

  return (
    <Layout className="layout" style={{ background: 'white' }}>
      <Content
        style={{
          padding: '50px 50px',
          margin: '5% auto',
          border: '1px solid lightgrey',
          background: 'white',
        }}
      >
        <h1 style={{ fontSize: '25px' }}>How much time will you need at the <br/> Community Co-Working Space? </h1>
        <Content style={{ padding: '50px 150px', margin: 'auto auto' }}>
          <div>
            <Radio.Group onChange={onChange}>
              <Radio style={radioStyle} value={'1-2 Hours'} onClick={() => props.updateDuration(value)}>
                1 - 2 Hours
              </Radio>
              <Radio style={radioStyle} value={'3-4 Hours'} onClick={() => props.updateDuration(value)}>
                3 - 4 Hours
              </Radio>
              <Radio style={radioStyle} value={'6 Hours'} onClick={() => props.updateDuration(value)}>
                6 Hours
              </Radio>
            </Radio.Group>
          </div>
          <h2>THE DURATION IS = {props.durationOnProps}</h2>
          <div style={{ padding: '50px 10px' }}>
            <Button onClick={() => props.updateDuration(value)}>
                <Link to="/make-res">Next</Link>
            </Button>
          </div>
        </Content>
      </Content>
    </Layout>
  );
};

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    durationOnProps: state.duration
  };
};

export default connect(mapStateToProps, {updateDuration})(RenderDuration);