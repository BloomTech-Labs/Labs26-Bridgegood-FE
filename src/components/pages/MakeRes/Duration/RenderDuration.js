import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Radio, Button } from 'antd';

const { Content } = Layout;

function RenderDuration(props) {
  const { onChange, radioStyle, value } = props;

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
            <Radio.Group onChange={onChange} value={value}>
              <Radio style={radioStyle} value={1}>
                1 - 2 Hours
              </Radio>
              <Radio style={radioStyle} value={2}>
                3 - 4 Hours
              </Radio>
              <Radio style={radioStyle} value={3}>
                6 Hours
              </Radio>
            </Radio.Group>
          </div>
          <div style={{ padding: '50px 10px' }}>
            <Button>
              <Link to="/make-res">Next</Link>
            </Button>
          </div>
        </Content>
      </Content>
    </Layout>
  );
}

export default RenderDuration;
