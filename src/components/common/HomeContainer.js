// Home Layout Container component
// Acts as a "layout page" by taking a page content parameter
// Wraps content and adds extra stuff, like header and footer, and determines the general layout;
// Also, passes down global state (like auth state)

import React, { useState, useEffect, useMemo } from 'react';
import RenderHeader from './Header/RenderHeader';
import RenderFooter from './Footer/RenderFooter';

// import { Layout } from 'antd';

// const { Header, Footer, Sider, Content } = Layout;

export default function HomeContainer({ authService, userInfo, PageContent }) {
  return (
    <>
      <RenderHeader userInfo={userInfo} authService={authService} />
      <PageContent userInfo={userInfo} />
      <RenderFooter userInfo={userInfo} authService={authService} />
    </>
  );
}
