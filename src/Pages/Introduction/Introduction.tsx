import { ReactElement, useRef } from 'react';
import cx from 'classnames';
import SkillsList from '@/components/SkillsList/SkillsList';

import styles from './Introduction.module.scss';

const Introduction = (): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // usePageObserver({ wrapperRef, pageHash: '#home' });

  // useEffect(() => {
  //   console.log('INTRODUCTION EFFECT');
  //   console.log(wrapperRef);
  // }, []);

  return (
    <div
      className={cx(styles.wrapper)}
      ref={wrapperRef}
      data-page-hash="#introduction"
    >
      <div className={styles.content}>
        <div className={styles.box}>
          <div>
            <p className={styles.smallText}>Hello There!</p>
            <p className={styles.mainText}>I am a Frontend Developer</p>
          </div>

          <SkillsList />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
