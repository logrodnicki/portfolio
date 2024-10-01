'use client';

import { ReactElement, useContext, useEffect, useState } from 'react';
import cx from 'classnames';

import PagesContext from '@/contexts/pagesContext';
import styles from './Dots.module.scss';

const Dots = (): ReactElement => {
  const [activeDotTranslate, setActiveDotTranslate] = useState(0);
  const [activeDotMoveClass, setActiveDotMoveClass] = useState('');
  const { activePage } = useContext(PagesContext);

  useEffect(() => {
    setActiveDotTranslate(activePage * 102);

    setActiveDotMoveClass('move');
    setTimeout(() => {
      setActiveDotMoveClass('');
    }, 1000);
  }, [activePage]);

  return (
    <div className={styles.wrapper}>
      <div
        className={cx(styles.activeDot, activeDotMoveClass)}
        style={{ translate: `0px ${activeDotTranslate}px` }}
      />
      <div className={styles.dot} />
      <div className={styles.line} />
      <div className={styles.dot} />
      <div className={styles.line} />
      <div className={styles.dot} />
    </div>
  );
};

export default Dots;
