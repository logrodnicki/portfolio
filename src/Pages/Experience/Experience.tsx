import { ReactElement, useRef } from 'react';
import ExperienceItem from '@/components/Experience/ExperienceItem/ExperienceItem';
import { experience } from '@/data/data';
import Title from '@/components/Title/Title';
import ExperienceTimeline from '@/components/Experience/ExperienceTimeline/ExperienceTimeline';
import styles from './Experience.module.scss';

const Experience = (): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles.wrapper}
      ref={wrapperRef}
      data-page-hash="/experiences"
    >
      <Title text="Experience" />
      <div />
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
