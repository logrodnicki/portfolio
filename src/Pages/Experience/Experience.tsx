import { ReactElement } from 'react';
import ExperienceItem from '@/components/ExperienceItem/ExperienceItem';
import { experience } from '@/data/data';
import styles from './Experience.module.scss';

const Experience = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      {experience.map(({ name, position, duties, startDate, endDate }) => {
        return (
          <ExperienceItem
            key={name}
            item={{ name, position, duties, startDate, endDate }}
          />
        );
      })}
    </div>
  );
};

export default Experience;
