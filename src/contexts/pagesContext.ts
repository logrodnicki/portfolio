import React, { createContext } from 'react';

interface PagesContextValue {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const PagesContext = createContext<PagesContextValue>({
  activePage: '#home',
  setActivePage: () => {},
});

export default PagesContext;
