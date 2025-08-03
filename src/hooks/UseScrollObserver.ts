import { useEffect } from 'react';

interface Props {
  positions: number[];
  pageHash: string;
}

const UseScrollObserver = ({ positions, pageHash }: Props) => {
  const onScrollHandler = (event: Event) => {
    console.log('SCROLL');
    console.log(event);
    // console.log(event.scrollY);
    console.log(window);
    console.log(positions);
    console.log(pageHash);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);
};

export default UseScrollObserver;
