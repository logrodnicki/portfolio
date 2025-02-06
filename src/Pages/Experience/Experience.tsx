import { ReactElement, useRef } from 'react';
import ExperienceItem from '@/components/ExperienceItem/ExperienceItem';
import { experience } from '@/data/data';
import usePageObserver from '@/hooks/UsePageObserver';
import Title from '@/components/Title/Title';
import ExperienceTimeline from '@/components/ExperieceTimeline/ExperienceTimeline';
import styles from './Experience.module.scss';

const Experience = (): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  usePageObserver({ wrapperRef, pageNumber: 1 });

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <Title text="Experience" />
      <div className={styles.list}>
        {experience.map(({ name, position, duties, startDate, endDate }) => {
          return (
            <div key={name} className={styles.row}>
              <ExperienceTimeline />
              <ExperienceItem
                key={name}
                item={{ name, position, duties, startDate, endDate }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
