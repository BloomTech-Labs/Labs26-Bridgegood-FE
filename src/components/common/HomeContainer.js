// Home Layout Container component
// Acts as a "layout page" by taking a page content parameter
// Wraps content and adds extra stuff, like header and footer, and determines the general layout;
// Also, passes down global state (like auth state)

import React from 'react';
import RenderHeader from './Header/RenderHeader';
import RenderFooter from './Footer/RenderFooter';

export default function HomeContainer({ userInfo, PageContent }) {
  return (
    <>
      <RenderHeader userInfo={userInfo} />
      <PageContent userInfo={userInfo} />
      <RenderFooter userInfo={userInfo} />
    </>
  );
}
