import React from 'react';
import { ReactComponent as ThumbsDown } from './Assets/ThumbsDown.svg';
import { ReactComponent as ThumbsUp } from './Assets/ThumbsUp.svg';
import { Typography, Space, Button } from 'antd';
const { Text } = Typography;
export const size = '20px';
const SVGStyles = {
  width: size,
  height: size,
};
const Circle = {
  width: size,
  height: size,
  border: 'none',
  borderRadius: '100%',
  border: '1px solid black',
};

export const DonateCircle = {
  ...Circle,
  background: 'green',
};

export const NoDonateCircle = {
  ...Circle,
  background: 'red',
};
export const useraction = [
  () => console.log('Up Voted'),
  () => console.log('Down Voted'),
];
export const dataSource = [
  {
    key: '1',
    bgname: 'Mike_Sollis',
    room: 'Co-Working',
    restimes: '10:00AM - 6:00PM',
    donated: true,
    donationamount: 15.0,
    useraction,
    userrating: 100,
  },
  {
    key: '2',
    bgname: 'Tim_Rotherford',
    room: 'Media Room',
    restimes: '3:00PM - 5:00PM',
    donated: false,
    donationamount: 0,
    useraction,
    userrating: 93,
  },
];

export const columns = [
  {
    title: 'BG Username',
    dataIndex: 'bgname',
    key: 'bgname',
    render: text => <Text>{text}</Text>,
  },
  {
    title: 'Room',
    dataIndex: 'room',
    key: 'room',
    render: text => <Text>{text}</Text>,
  },
  {
    title: 'Reservation Times',
    dataIndex: 'restimes',
    key: 'restimes',
    render: text => <Text>{text}</Text>,
  },
  {
    title: 'Donated',
    dataIndex: 'donated',
    key: 'donated',
    render: donated => {
      return donated ? (
        <div style={DonateCircle}></div>
      ) : (
        <div style={NoDonateCircle}></div>
      );
    },
  },
  {
    title: 'Donation Amount',
    dataIndex: 'donationamount',
    key: 'donationamount',
    render: amount => <Text>${amount}</Text>,
  },
  {
    title: 'User Action',
    dataIndex: 'useraction',
    key: 'useraction',
    render: ([up, down]) => {
      return (
        <Space>
          <Button type="link" onClick={up}>
            <ThumbsUp style={SVGStyles} />
          </Button>
          <Button type="link" onClick={down}>
            <ThumbsDown style={SVGStyles} />
          </Button>
        </Space>
      );
    },
  },
  {
    title: 'User Rating',
    dataIndex: 'userrating',
    key: 'userrating',
    render: rating => <Text>{rating}%</Text>,
  },
];
