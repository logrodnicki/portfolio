import { ReactElement, useRef } from 'react';
import Skill from '@/components/Skill/Skill';

import usePageObserver from '@/hooks/UsePageObserver';
import styles from './Skills.module.scss';

const Skills = (): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  usePageObserver({ wrapperRef, pageNumber: 1 });

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      Skills
      <Skill label="JavaScript" logoSrc="/images/javascript.png" />
      <Skill label="React" logoSrc="/images/react.png" />
      <Skill label="" logoSrc="/images/react.png" />
    </div>
  );
};

export default Skills;
