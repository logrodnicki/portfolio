import React, { createContext } from 'react';

interface PagesContextValue {
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

const PagesContext = createContext<PagesContextValue>({
  activePage: 0,
  setActivePage: () => {},
});

export default PagesContext;
