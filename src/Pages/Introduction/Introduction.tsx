import { ReactElement, useRef } from 'react';
import cx from 'classnames';
import usePageObserver from '@/hooks/UsePageObserver';
import SkillsList from '@/components/SkillsList/SkillsList';

import styles from './Introduction.module.scss';

const Introduction = (): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  usePageObserver({ wrapperRef, pageNumber: 0 });

  return (
    <div className={cx(styles.wrapper)} ref={wrapperRef}>
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
