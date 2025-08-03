'use client';

import './globals.css';
import React, { useMemo, useState } from 'react';
import Header from '@/components/Header/Header';
// import Dots from '@/components/Dots/Dots';
import PagesContext from '@/contexts/pagesContext';
import SmallHeader from '@/components/SmallHeader/SmallHeader';

// export const metadata = {
//   title: 'Lukasz Ogrodnicki - website',
//   description: 'Lukasz Ogrodnicki - website',
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [activePage, setActivePage] = useState(0);

  const pagesContextValue = useMemo(() => {
    return {
      activePage,
      setActivePage,
    };
  }, [activePage]);

  return (
    <html lang="en">
      <body>
        <PagesContext.Provider value={pagesContextValue}>
          <Header />
          <SmallHeader />
          {/* <Dots /> */}
          {children}
        </PagesContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
