import { GoDotFill } from 'react-icons/go';
import { IExperienceItem } from '@/types/experience';
import cx from 'classnames';

import styles from './AnimatedCompany.module.scss';

interface Props {
  item: IExperienceItem;
  wrapperClass?: string;
  isVisible: boolean;
}

const AnimatedCompany = ({
  item: { name, position, duties, startDate, endDate },
  wrapperClass = '',
  isVisible,
}: Props) => {
  const wrapperClasses = cx(styles.wrapper, wrapperClass, {
    [styles.show]: isVisible,
  });

  const initDutyAnimationDelay = 500;

  return (
    <div className={wrapperClasses}>
      <div className={styles.frames} />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
        <p className={styles.date}>{`${startDate} - ${endDate}`}</p>
        <ul>
          {duties.map((duty, index) => {
            return (
              <li
                className={styles.duty}
                key={duty}
                style={{ animationDelay: `${(index * 300) + initDutyAnimationDelay}ms` }}
              >
                <GoDotFill className={styles.listIcon} size={12} />
                <span>{duty}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedCompany;
