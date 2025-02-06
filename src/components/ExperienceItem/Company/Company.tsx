import { ReactElement } from 'react';
import { IExperienceItem } from '@/types/experience';
import { GoDotFill } from 'react-icons/go';
import cx from 'classnames';

import styles from './Company.module.scss';

interface Props {
  item: IExperienceItem;
  wrapperClass?: string;
  isVisible: boolean;
}

const Company = ({
  item: { name, position, duties, startDate, endDate },
  wrapperClass = '',
  isVisible,
}: Props): ReactElement => {
  const wrapperClasses = cx(styles.wrapper, wrapperClass, {
    [styles.show]: isVisible,
  });
  return (
    <div className={wrapperClasses}>
      <div className={styles.background} />
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
                style={{ animationDelay: `${index * 300}ms` }}
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

export default Company;
