import { useContext, useEffect } from 'react';
import PagesContext from '@/contexts/pagesContext';

interface Props {
  wrapperRef: HTMLDivElement;
  pageNumber: number;
}

const PageObserverHook = ({ wrapperRef, pageNumber }: Props) => {
  const { setActivePage } = useContext(PagesContext);

  useEffect(() => {
    if (!wrapperRef) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePage(pageNumber);
        }
      });
    }, {
      threshold: 0.75,
    });

    observer.observe(wrapperRef);

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default PageObserverHook;
