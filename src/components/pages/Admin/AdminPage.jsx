import React from 'react';
import { Layout } from 'antd';
import ReservationTable from './ReservationTable';
export default function AdminPage() {
  return (
    <Layout.Content
      style={{
        height: 'calc(100vh - 64px)',
        overflowY: 'scroll',
        padding: '15px',
      }}
    >
      <ReservationTable />
    </Layout.Content>
  );
}
