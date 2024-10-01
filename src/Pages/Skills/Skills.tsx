import { ReactElement, useRef } from 'react';
import Skill from '@/components/Skill/Skill';
import usePageObserver from '@/hooks/UsePageObserver';

import styles from './Skills.module.scss';

interface SkillType {
  label: string;
  logoSrc: string;
  id: string;
  addImageBackground?: boolean;
}

const Skills = (): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  usePageObserver({ wrapperRef, pageNumber: 1 });

  const skills: SkillType[] = [
    {
      label: 'JavaScript',
      logoSrc: '/images/javascript.png',
      id: crypto.randomUUID(),
    },
    {
      label: 'TypeScript',
      logoSrc: '/images/typescript.png',
      id: crypto.randomUUID(),
    },
    {
      label: 'React',
      logoSrc: '/images/react.png',
      id: crypto.randomUUID(),
    },
    {
      label: 'Vue',
      logoSrc: '/images/vue.png',
      id: crypto.randomUUID(),
    },
    {
      label: 'HTML',
      logoSrc: '/images/html.png',
      id: crypto.randomUUID(),
    },
    {
      label: 'CSS',
      logoSrc: '/images/css.png',
      id: crypto.randomUUID(),
    },
    {
      label: 'Next.js',
      logoSrc: '/images/next.png',
      id: crypto.randomUUID(),
      addImageBackground: true,
    },
    {
      label: 'Node.js',
      logoSrc: '/images/node.png',
      id: crypto.randomUUID(),
      addImageBackground: false,
    },
    {
      label: 'Go',
      logoSrc: '/images/go.svg',
      id: crypto.randomUUID(),
      addImageBackground: true,
    },
    {
      label: 'Tailwind',
      logoSrc: '/images/tailwind.png',
      id: crypto.randomUUID(),
    },
  ];

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.list}>
        {skills.map(({ label, logoSrc, id, addImageBackground }, index) => {
          return (
            <Skill
              key={id}
              label={label}
              logoSrc={logoSrc}
              addImageBackground={addImageBackground}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
