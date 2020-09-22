// Wraps the page content and adds some extra stuff, like header and footer;
// The Render...jsx files act like partials and this file acts like a master page
//
import React, { useState, useEffect, useMemo } from 'react';
import RenderDonatePage from './RenderDonatePage';

export default function DonateContainer() {
  return <RenderDonatePage />;
}
