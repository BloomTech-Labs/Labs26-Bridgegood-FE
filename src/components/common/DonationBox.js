import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Input, Divider } from 'antd';

import { UPDATE_STEP } from '../../state/reducers/MakeResReducer';
import { UPDATE_DONATION } from '../../state/reducers/MakeResReducer';
// import '../pages/MakeRes/MakeRes.less';
import { ADD_RESERVATION } from '../../state/actions/AddResAction';

export default function DonationBox(props) {
  const [amount, setAmount] = useState(5);

  const gridStyleAmtFixed = {
    width: '28%',
    height: '44px',
    textAlign: 'center',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  };
  const gridStyleAmtOther = {
    width: '58%',
    height: '44px',
    textAlign: 'center',
    padding: '0',
    fontWeight: 'bold',
  };
  const gridStyleDonateBtn = {
    width: '88%',
    height: '44px',
    textAlign: 'center',
    padding: '0',
    margin: '22px 6% 28px 6%',
  };
  const cardStyle = {
    // padding: '30px'
    border: '1px solid #C4C4C4',
  };

  function amountClick(amt) {
    setAmount(amt);
  }

  function getBackground(val) {
    return {
      background: amount === val ? '#002171' : '#E5E5E5',
      color: amount === val ? 'white' : '#7E7A7A',
    };
  }

  return (
    <Card
      headStyle={{
        background: '#E5E5E5',
        height: '60px',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
      style={cardStyle}
      title="Choose an amount to give"
    >
      <Card.Grid
        style={{
          ...gridStyleAmtFixed,
          margin: '36px 0 0 6%',
          ...getBackground(1),
        }}
        onClick={() => amountClick(1)}
      >
        $1
      </Card.Grid>
      <Card.Grid
        style={{
          ...gridStyleAmtFixed,
          margin: '36px 2% 0 2%',
          ...getBackground(5),
        }}
        onClick={() => amountClick(5)}
      >
        $5
      </Card.Grid>
      <Card.Grid
        style={{
          ...gridStyleAmtFixed,
          margin: '36px 6% 0 0',
          ...getBackground(10),
        }}
        onClick={() => amountClick(10)}
      >
        $10
      </Card.Grid>
      <Card.Grid
        style={{
          ...gridStyleAmtFixed,
          margin: '10px 0 0 6%',
          ...getBackground(20),
        }}
        onClick={() => amountClick(20)}
      >
        $20
      </Card.Grid>
      <Card.Grid style={{ ...gridStyleAmtOther, margin: '10px 6% 0 2%' }}>
        <Input
          block
          onChange={() => {}}
          placeholder="Other amount"
          maxLength={15}
        />
      </Card.Grid>
      <Card.Grid hoverable={false} style={gridStyleDonateBtn}>
        <Button
          style={{
            height: '44px',
            background: '#002171',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
          }}
          block
        >
          DONATE
        </Button>
      </Card.Grid>
      <div style={{ padding: '0 28px' }}>
        <Divider />
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Your $5 donation gives 1 student access to the studio. 100% of the
          donation funds the space.
        </p>
        {props.children}
      </div>
    </Card>
  );
}
