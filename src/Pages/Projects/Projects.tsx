import { projects } from '@/data/data';
import Project from '@/components/Project/Project';
import { useRef } from 'react';
import usePageObserver from '@/hooks/UsePageObserver';
import Title from '@/components/Title/Title';
import styles from './Projects.module.scss';

const Projects = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  usePageObserver({ wrapperRef, pageNumber: 2 });

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <Title text="Projects" />
      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.name} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
