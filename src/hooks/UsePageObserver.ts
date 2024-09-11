import { RefObject, useContext, useEffect } from 'react';
import PagesContext from '@/contexts/pagesContext';

interface Props {
  wrapperRef: RefObject<HTMLDivElement>;
  pageNumber: number;
}

const UsePageObserver = ({ wrapperRef, pageNumber }: Props) => {
  const { setActivePage } = useContext(PagesContext);

  useEffect(() => {
    if (!wrapperRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePage(pageNumber);
          }
        });
      },
      {
        threshold: 0.75,
      },
    );

    observer.observe(wrapperRef.current);

    return () => {
      observer.disconnect();
    };
  }, [wrapperRef]);
};

export default UsePageObserver;
