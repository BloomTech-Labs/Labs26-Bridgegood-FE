import React from 'react';
import { Layout } from 'antd';
import ReservationTable from './ReservationTable';
import Cards from './Cards';
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
      <div>
        <Cards />
      </div>
    </Layout.Content>
  );
}
