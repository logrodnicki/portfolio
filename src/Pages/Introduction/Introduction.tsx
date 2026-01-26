import { ReactElement, useRef } from 'react';
import cx from 'classnames';
import SkillsList from '@/components/SkillsList/SkillsList';
import AnimatedFadeText from '@/components/Animations/AnimatedFadeText';

import styles from './Introduction.module.scss';

const IntroductionPage = (): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cx(styles.wrapper)} ref={wrapperRef} data-page-hash="/">
      <div className={styles.content}>
        <div className={styles.box}>
          <div>
            <p className={styles.smallText}>Hello There!</p>
            <AnimatedFadeText
              text="I am a Frontend Developer"
              classes={styles.mainText}
            />
          </div>

          <SkillsList initDelay={1000} />
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
