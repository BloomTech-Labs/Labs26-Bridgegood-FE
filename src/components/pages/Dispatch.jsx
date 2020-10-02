import React from 'react';
import AdminLayout from './AdminLayout';
import AdminPage from './Admin/AdminPage';

export default function Dispatch({ route, layout, content }) {
  if (route === 'admin') {
    return <AdminLayout PageContent={AdminPage} />;
  } else {
    return 'Unknown Route';
  }
}
