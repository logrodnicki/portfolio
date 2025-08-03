'use client';

import Introduction from '@/Pages/Introduction/Introduction';
import Contact from '@/Pages/Contact/Contact';
import Experience from '@/Pages/Experience/Experience';
import Projects from '@/Pages/Projects/Projects';
import { useEffect, useLayoutEffect, useRef } from 'react';

const Home = () => {
  // const [pagesPositions, setPagesPositions] = useState([]);
  const pagesRef = useRef<HTMLDivElement>(null);
  // const pagesPositionsRef = useRef<HTMLDivElement>([]);

  // const hashes = ['#home', '#experience', '#project', '#contact'];

  useLayoutEffect(() => {
    if (!pagesRef.current) {
      return;
    }

    const pages = [];

    Object.values(pagesRef.current.children).forEach((item) => {
      pages.push({
        startPosition: item.offsetTop - 64,
        endPosition: item.offsetTop - 64 + item.clientHeight,
        hash: item.dataset.pageHash,
      });
    });

    // setPagesPositions(pages);
    // pagesPositionsRef.current = pages;
    // console.log(pagesPositions);
  }, []);

  // const windowHalfHeight = window.innerHeight / 2;

  // const onScrollHandler = (event: Event) => {
  //   const currentHalfHeightScrollPosition = window.scrollY + windowHalfHeight;
  //   // const currentPage = pagesPositionsRef.current.find(
  // };

  // const preparePagesMap = useMemo(() => {
  //
  //   console.log('TEST 2');
  //   console.log(pagesRef.current);
  //
  //   setTimeout(() => {
  //     console.log('TEST 3');
  //     console.log(pagesRef.current);
  //   });
  //
  //   if (!pagesRef.current) {
  //     return;
  //   }
  //
  //   pagesRef.current.children.forEach((item) => {
  //     console.log('TEST');
  //     console.log(item);
  //   });
  //
  //   return map;
  // }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

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
