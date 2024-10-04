import { ReactElement, useRef } from 'react';
import Skill from '@/components/Skill/Skill';

import { skills } from '@/data/data';

import styles from './SkillsList.module.scss';

const SkillsList = (): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {skills.map(({ id, logoSrc }, index) => {
        return <Skill key={id} logoSrc={logoSrc} index={index} isSmall />;
      })}
    </div>
  );
};

export default SkillsList;
