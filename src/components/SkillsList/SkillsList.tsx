import { ReactElement, useRef } from 'react';
import Skill from '@/components/Skill/Skill';

import { skills } from '@/data/data';

import styles from './SkillsList.module.scss';

interface Props {
  initDelay?: number
}

const SkillsList = ({ initDelay = 0 }: Props): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {skills.map(({ id, logoSrc }, index) => {
        return <Skill key={id} logoSrc={logoSrc} index={index} initDelay={initDelay} isSmall />;
      })}
    </div>
  );
};

export default SkillsList;
