import { IProject } from '@/types/projects';

import styles from './Project.module.scss';

interface Props {
  project: IProject;
}

const Project = ({ project: { name, technologies, description } }: Props) => {
  return (
    // <div className={styles.wrapper}>
    //   <div className={styles.background} />
    //   <div className={styles.content}>
    //     <div className={styles.name}>{name}</div>
    //     <div className={styles.technologies}>
    //       {technologies.map((technology) => {
    //         return (
    //           <div className={styles.technology} key={technology.name}>
    //             <div className={styles.technologyImage}>
    //               <img src={technology.logoUrl} />
    //             </div>
    //             <div className={styles.technologyName}>{technology.name}</div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div className={styles.wrapper}>
      <div className={styles.name}>{name}</div>
      {description ? (
        <div className={styles.description}>{description}</div>
      ) : null}
      <div className={styles.technologies}>
        {technologies.map((technology) => {
          return (
            <div className={styles.technology} key={technology.name}>
              <div className={styles.technologyImage}>
                <img src={technology.logoUrl} />
              </div>
              <div className={styles.technologyName}>{technology.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
