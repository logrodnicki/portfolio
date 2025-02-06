'use client';

import Introduction from '@/Pages/Introduction/Introduction';
import Contact from '@/Pages/Contact/Contact';
import Experience from '@/Pages/Experience/Experience';
import Projects from '@/Pages/Projects/Projects';
import { useRef } from 'react';

const Home = () => {
  const pagesRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <div ref={pagesRef}>
        <Introduction />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
