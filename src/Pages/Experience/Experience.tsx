import { ReactElement, useRef } from 'react';
import ExperienceItem from '@/components/ExperienceItem/ExperienceItem';
import { experience } from '@/data/data';
// import usePageObserver from '@/hooks/UsePageObserver';
import Title from '@/components/Title/Title';
import ExperienceTimeline from '@/components/ExperienceTimeline/ExperienceTimeline';
import styles from './Experience.module.scss';

const Experience = (): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // usePageObserver({ wrapperRef, pageHash: '#experience' });
  // useScrollObserver({ positions: [0, 1000], pageHash: '#experience' });

  // const isVisible = wrapperRef.current?.checkVisibility();

  // console.log('EXPERIECE');
  // console.log(isVisible);
  //
  // useEffect(() => {
  //   console.log('EXPERIECE EFFECT');
  //   console.log(wrapperRef);
  // }, []);

  return (
    <div
      className={styles.wrapper}
      ref={wrapperRef}
      data-page-hash="#experiences"
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
