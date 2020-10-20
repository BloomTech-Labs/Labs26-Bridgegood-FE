import React, { useState } from 'react';
import { Button, Row, Col, Table, Typography, Input } from 'antd';
import { dataSource, columns } from './Utils';
import { ReactComponent as LeftArrow } from './Assets/LeftArrow.svg';
import { ReactComponent as RightArrow } from './Assets/RightArrow.svg';

export default function ReservationTable() {
  const [date, setDate] = useState(new Date());

  const modDays = x => {
    const newDate = new Date(date.setDate(date.getDate() + x));
    setDate(newDate);
  };

  return (
    <>
      <Row
        style={{
          marginBottom: '5px',
        }}
      >
        <Col
          style={{
            display: 'flex',
          }}
          span={24}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: 'auto',
            }}
          >
            <a
              style={{
                color: 'black',
                marginRight: '5px',
              }}
              onClick={() => modDays(-1)}
            >
              <LeftArrow />
            </a>
            <a
              style={{
                color: 'black',
                marginRight: '10px',
              }}
              onClick={() => modDays(1)}
            >
              <RightArrow />
            </a>
            <a
              style={{
                color: 'black',
                fontWeight: 500,
                userSelect: 'none',
              }}
              onClick={() => setDate(new Date())}
            >
              {date
                .toString()
                .split(' ')
                .splice(0, 4)
                .join(' ')}
            </a>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Input
              style={{
                height: '32px',
              }}
              placeholder="Add user"
            />
            <Button
              style={{
                margin: '0 5px',
              }}
            >
              Add
            </Button>
            <Button>Export</Button>
          </div>
        </Col>
      </Row>
      <Table
        pagination={false}
        style={{ marginBottom: '25px' }}
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
}
