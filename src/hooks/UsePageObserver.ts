import { RefObject, useContext, useEffect } from 'react';
import PagesContext from '@/contexts/pagesContext';
import { useRouter } from 'next/navigation';

interface Props {
  wrapperRef: RefObject<HTMLDivElement>;
  pageHash: string;
}

const UsePageObserver = ({ wrapperRef, pageHash }: Props) => {
  const { setActivePage } = useContext(PagesContext);
  const { replace } = useRouter();

  useEffect(() => {
    if (!wrapperRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePage(pageHash);
            replace(pageHash, { scroll: false });
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(wrapperRef.current);

    return () => {
      observer.disconnect();
    };
  }, [wrapperRef]);
};

export default UsePageObserver;
