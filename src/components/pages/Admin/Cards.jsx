import React, { useState } from 'react';
import { Table, Row, Col, Card, Form, Input, Button, Alert } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Manual Check-In" bordered={false}>
          <ManualCheckin />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Top 5 Donors" bordered={false}>
          <TopDonors />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Available Seats" bordered={false}>
          <AvailableSeats />
        </Card>
      </Col>
    </Row>
  );
};

const AvailableSeats = () => {
  const dataSource = [
    {
      key: '1',
      room: 'Co-Working Room',
      available: 13,
      maxseats: 20,
    },
    {
      key: '2',
      room: 'Media Room',
      available: 31,
      maxseats: 50,
    },
  ];

  const columns = [
    {
      title: 'Room',
      dataIndex: 'room',
      key: 'room',
    },
    {
      title: 'Available Seats',
      dataIndex: 'available',
      key: 'available',
    },
    {
      title: 'Maximum Seats',
      dataIndex: 'maxseats',
      key: 'maxseats',
    },
  ];

  return (
    <Table
      style={{
        width: '100%',
      }}
      pagination={false}
      dataSource={dataSource}
      columns={columns}
    />
  );
};
const TopDonors = () => {
  const dataSource = [
    {
      key: '1',
      user: 'Mike Rosin',
      avgdonation: 30,
      totaldonation: 150,
    },
    {
      key: '2',
      user: 'August Champlin',
      avgdonation: 10,
      totaldonation: 55,
    },
    {
      key: '3',
      user: 'Jena Pollich',
      avgdonation: 10,
      totaldonation: 20,
    },
    {
      key: '4',
      user: 'Martin Carter',
      avgdonation: 10,
      totaldonation: 10,
    },
    {
      key: '5',
      user: 'Patience Schuppe',
      avgdonation: 5,
      totaldonation: 8,
    },
  ];

  const columns = [
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Average Donation',
      dataIndex: 'avgdonation',
      key: 'avgdonation',
      render: price => `$${price}`,
    },
    {
      title: 'Total Donations',
      dataIndex: 'totaldonation',
      key: 'totaldonation',
      render: price => `$${price}`,
    },
  ];

  return (
    <Table
      style={{
        width: '100%',
      }}
      pagination={false}
      dataSource={dataSource}
      columns={columns}
    />
  );
};

const ManualCheckin = () => {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const onFinish = values => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  const onFinishFailed = errorInfo => {
    setFailed(true);
    setTimeout(() => setFailed(false), 5000);
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {success && (
        <Alert
          style={{ marginBottom: '15px' }}
          message="User has been checked-in."
          type="success"
        />
      )}
      {failed && (
        <Alert
          style={{ marginBottom: '15px' }}
          message="User could not be checked-in."
          type="error"
        />
      )}
      <Input placeholder="BridgeGood Username" />
      <Button
        style={{
          marginTop: '15px',
        }}
        type="primary"
        htmlType="submit"
      >
        Check-In
      </Button>
    </Form>
  );
};
