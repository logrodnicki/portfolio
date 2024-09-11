import { ReactElement } from 'react';
import cx from 'classnames';

import styles from './Introduction.module.scss';

const Introduction = (): ReactElement => {
  return (
    <div className={cx(styles.wrapper, 'bg-indigo-1000')}>
      introduction
    </div>
  );
};

export default Introduction;
