import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/UseIntersectionObserver';
import cx from 'classnames';
import styles from './ExperienceTimeline.module.scss';

const ExperienceTimeline = () => {
  const itemRef = useRef<HTMLDivElement>(null);

  const { isVisible } = useIntersectionObserver({
    itemRef,
    intersectionRatio: 0.8,
    threshold: 0.8,
  });

  return (
    <div className={styles.wrapper} ref={itemRef}>
      <div className={cx(styles.dot, { [styles.showDot]: isVisible })} />
      <div className={cx(styles.line, { [styles.showLine]: isVisible })} />
    </div>
  );
};

export default ExperienceTimeline;
