'use client';

import './globals.css';
import React, { useMemo, useState } from 'react';
import Header from '@/components/Header/Header';
import PagesContext from '@/contexts/pagesContext';
import SmallHeader from '@/components/SmallHeader/SmallHeader';
import { NavButton } from '@/types/common';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [activePage, setActivePage] = useState(0);

  const pagesContextValue = useMemo(() => {
    return {
      activePage,
      setActivePage,
    };
  }, [activePage]);

  const navButtons: NavButton[] = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Experience',
      href: '/experience',
    },
    {
      text: 'Projects',
      href: '/projects',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <html lang="en">
      <body>
        <PagesContext.Provider value={pagesContextValue}>
          <Header buttons={navButtons} />
          <SmallHeader buttons={navButtons} />
          <main>{children}</main>
        </PagesContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
