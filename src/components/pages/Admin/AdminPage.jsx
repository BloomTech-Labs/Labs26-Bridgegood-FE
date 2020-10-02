import React from 'react';
import { Layout } from 'antd';
import ImageWrapper from './TestWrapper';

export default function AdminPage() {
  return (
    <Layout.Content>
      <h1>THIS IS THE MAIN CONTENT</h1>
      <ImageWrapper
        src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png"
        desc="testing"
      />
    </Layout.Content>
  );
}
