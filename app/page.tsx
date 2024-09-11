'use client';

import Introduction from '@/Pages/Introduction/Introduction';
import Skills from '@/Pages/Skills/Skills';
import Contact from '@/Pages/Contact/Contact';
import { useRef } from 'react';

const Home = () => {
  const pagesRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <div ref={pagesRef}>
        <Introduction />
        <Skills />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
