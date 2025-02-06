import { RefObject, useEffect, useState } from 'react';

interface Props {
  itemRef: RefObject<HTMLDivElement>;
  intersectionRatio: number;
  threshold: number;
}

interface UseIntersectionObserverType {
  isVisible: boolean;
  setVisible: (value: boolean) => void;
}

const UseIntersectionObserver = ({
  itemRef,
  intersectionRatio,
  threshold,
}: Props): UseIntersectionObserverType => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!itemRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio < intersectionRatio) {
            return;
          }

          setVisible(true);
        });
      },
      {
        threshold,
      },
    );

    observer.observe(itemRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    isVisible,
    setVisible,
  };
};

export default UseIntersectionObserver;
