// Home Layout Container component
// Acts as a "layout page" by taking a page content parameter
// Wraps content and adds extra stuff, like header and footer, and determines the general layout;
// Also, passes down global state (like auth state)

import React from 'react';
import RenderHeader from './Header/RenderHeader';
import RenderFooter from './Footer/RenderFooter';

export default function HomeContainer({ pageContent: PageContent }) {
  return (
    <div
      style={{
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <RenderHeader />
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <PageContent />
      </div>

      <RenderFooter />
    </div>
  );
}
