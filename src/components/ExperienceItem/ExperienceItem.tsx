import { ReactElement, useEffect, useRef, useState } from 'react';
import { IExperienceItem } from '@/types/experience';
import Company from '@/components/ExperienceItem/Company/Company';

import styles from './ExperienceItem.module.scss';

interface Props {
  item: IExperienceItem;
}

const ExperienceItem = ({ item }: Props): ReactElement | null => {
  const [isVisible, setVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 0.8) {
            return;
          }

          setVisible(true);
        });
      },
      {
        threshold: 0.8,
      },
    );

    observer.observe(itemRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={itemRef}>
      <Company item={item} isVisible={isVisible} />
    </div>
  );
};

export default ExperienceItem;
