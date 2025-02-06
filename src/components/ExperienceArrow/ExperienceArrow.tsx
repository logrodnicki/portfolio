import { MdOutlineArrowRight } from 'react-icons/md';
import cx from 'classnames';
import { useEffect, useRef, useState } from 'react';
import UseIntersectionObserver from '@/hooks/UseIntersectionObserver';
import styles from './ExperienceArrow.module.scss';

const ExperienceArrow = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { isVisible } = UseIntersectionObserver({
    itemRef: wrapperRef,
    intersectionRatio: 0.8,
    threshold: 0.8,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= 5) {
        clearInterval(interval);
        return;
      }

      setCurrentIndex((prev) => {
        return prev + 1;
      });
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={cx(styles.wrapper)} ref={wrapperRef}>
      {isVisible ? (
        <div className={cx(styles.content)}>
          <div
            className={cx(styles.dot, { [styles.show]: currentIndex >= 0 })}
          />
          <div
            className={cx(styles.dot, { [styles.show]: currentIndex >= 1 })}
          />
          <div
            className={cx(styles.dot, { [styles.show]: currentIndex >= 2 })}
          />
          <MdOutlineArrowRight
            color="white"
            size={48}
            className={cx(styles.arrow, { [styles.show]: currentIndex >= 3 })}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ExperienceArrow;
