import { ReactElement, useRef } from 'react';
import { IExperienceItem } from '@/types/experience';
import AnimatedCompany from '@/components/ExperienceItem/AnimatedCompany/AnimatedCompany';

import useIntersectionObserver from '@/hooks/UseIntersectionObserver';
import styles from './ExperienceItem.module.scss';

interface Props {
  item: IExperienceItem;
}

const ExperienceItem = ({ item }: Props): ReactElement | null => {
  const itemRef = useRef<HTMLDivElement>(null);

  const { isVisible } = useIntersectionObserver({
    itemRef,
    intersectionRatio: 0.8,
    threshold: 0.8,
  });

  return (
    <div className={styles.wrapper} ref={itemRef} data-test={isVisible}>
      <AnimatedCompany item={item} isVisible={isVisible} />
    </div>
  );
};

export default ExperienceItem;
